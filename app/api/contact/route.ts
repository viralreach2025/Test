import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // If Supabase is not configured, return mock success
    if (!supabase) {
      console.log('🔧 Mock API: Contact submission', { name, email, subject })
      return NextResponse.json({ 
        success: true, 
        message: 'Message sent successfully (mock mode)' 
      })
    }

    // Insert into contact_submissions table
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        {
          name: name.trim(),
          email: email.toLowerCase().trim(),
          company: company?.trim() || null,
          subject: subject.trim(),
          message: message.trim(),
        }
      ])
      .select()

    if (error) {
      console.error('❌ Error saving contact submission:', error)
      
      // If table doesn't exist, create it
      if (error.code === '42P01') { // Table doesn't exist
        console.log('📋 Creating contact_submissions table...')
        
        const { error: createError } = await supabase.rpc('create_contact_submissions_table')
        
        if (createError) {
          console.error('❌ Error creating table:', createError)
          return NextResponse.json(
            { error: 'Database setup required. Please contact support.' },
            { status: 500 }
          )
        }
        
        // Try inserting again
        const { data: retryData, error: retryError } = await supabase
          .from('contact_submissions')
          .insert([
            {
              name: name.trim(),
              email: email.toLowerCase().trim(),
              company: company?.trim() || null,
              subject: subject.trim(),
              message: message.trim(),
            }
          ])
          .select()

        if (retryError) {
          console.error('❌ Error after table creation:', retryError)
          return NextResponse.json(
            { error: 'Failed to save message. Please try again.' },
            { status: 500 }
          )
        }

        console.log('✅ Contact submission saved after table creation:', retryData)
        return NextResponse.json({ 
          success: true, 
          message: 'Message sent successfully!' 
        })
      }
      
      return NextResponse.json(
        { error: 'Failed to save message. Please try again.' },
        { status: 500 }
      )
    }

    console.log('✅ Contact submission saved:', data)
    return NextResponse.json({ 
      success: true, 
      message: 'Message sent successfully!' 
    })

  } catch (error) {
    console.error('❌ Contact API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 