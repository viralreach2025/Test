import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { quizData, userType, results } = body

    // Generate HTML content for the report
    const htmlContent = generateReportHTML(quizData, userType, results)

    // Return HTML that can be printed to PDF
    return new NextResponse(htmlContent, {
      headers: {
        'Content-Type': 'text/html',
        'Content-Disposition': `inline; filename="viralreach-${userType}-report.html"`
      }
    })

  } catch (error) {
    console.error('Report generation error:', error)
    return NextResponse.json(
      { error: 'Failed to generate report' },
      { status: 500 }
    )
  }
}

function generateReportHTML(quizData: any, userType: string, results: any) {
  const isCreator = userType === 'creator'
  const isBrand = userType === 'brand'
  
  const reportTitle = isCreator ? 'Creator Income Report' : 'Brand ROI Report'
  const reportDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>${reportTitle}</title>
      <style>
        @media print {
          body { margin: 0; }
          .no-print { display: none; }
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
        }
        .header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 40px 20px;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          font-size: 32px;
          font-weight: bold;
        }
        .header p {
          margin: 10px 0 0 0;
          opacity: 0.9;
        }
        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 40px 20px;
        }
        .section {
          margin-bottom: 40px;
        }
        .section h2 {
          color: #667eea;
          border-bottom: 2px solid #667eea;
          padding-bottom: 10px;
          margin-bottom: 20px;
        }
        .metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin: 20px 0;
        }
        .metric-card {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          border-left: 4px solid #667eea;
        }
        .metric-value {
          font-size: 24px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 5px;
        }
        .metric-label {
          font-size: 14px;
          color: #666;
        }
        .recommendations {
          background: #f0f9ff;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .recommendation-item {
          margin-bottom: 10px;
          padding-left: 20px;
          position: relative;
        }
        .recommendation-item:before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #3b82f6;
          font-weight: bold;
        }
        .quiz-summary {
          background: #fef7ff;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #8b5cf6;
        }
        .summary-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding: 8px 0;
          border-bottom: 1px solid #e9d5ff;
        }
        .summary-label {
          font-weight: 600;
          color: #7c3aed;
        }
        .summary-value {
          color: #333;
        }
        .next-steps {
          background: #f0fdf4;
          padding: 20px;
          border-radius: 8px;
          border-left: 4px solid #22c55e;
        }
        .step {
          margin-bottom: 15px;
          padding-left: 20px;
          position: relative;
        }
        .step:before {
          content: counter(step-counter);
          counter-increment: step-counter;
          position: absolute;
          left: 0;
          background: #22c55e;
          color: white;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: bold;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #eee;
          color: #666;
        }
        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #667eea;
          margin-bottom: 10px;
        }
        .print-button {
          position: fixed;
          top: 20px;
          right: 20px;
          background: #667eea;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          font-weight: bold;
          z-index: 1000;
        }
        .print-button:hover {
          background: #5a67d8;
        }
      </style>
    </head>
    <body>
      <button onclick="window.print()" class="print-button no-print">
        🖨️ Print/Save as PDF
      </button>
      
      <div class="header">
        <h1>${reportTitle}</h1>
        <p>Generated on ${reportDate}</p>
      </div>
      
      <div class="container">
        ${isBrand ? generateBrandReport(quizData, results) : generateCreatorReport(quizData, results)}
        
        <div class="footer">
          <div class="logo">ViralReach</div>
          <p>Connect with authentic creators and achieve real results</p>
          <p>viralreach.ca</p>
        </div>
      </div>
    </body>
    </html>
  `
}

function generateBrandReport(quizData: any, results: any) {
  const roi = results.roi || 475
  const recommendations = results.recommendations || []
  
  return `
    <div class="section">
      <h2>📊 Your ROI Analysis</h2>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-value">${roi}%</div>
          <div class="metric-label">Your ROI Potential</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">250%</div>
          <div class="metric-label">Industry Average</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">+${roi - 250}%</div>
          <div class="metric-label">Improvement</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>📋 Campaign Profile</h2>
      <div class="quiz-summary">
        <div class="summary-item">
          <span class="summary-label">Industry:</span>
          <span class="summary-value">${quizData.industry || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Budget Range:</span>
          <span class="summary-value">${quizData.budget || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Primary Goals:</span>
          <span class="summary-value">${Array.isArray(quizData.goals) ? quizData.goals.join(', ') : 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Target Audience:</span>
          <span class="summary-value">${quizData.targetAudience || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Platform Focus:</span>
          <span class="summary-value">${quizData.platform || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Timeline:</span>
          <span class="summary-value">${quizData.timeline || 'Not specified'}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎯 Strategic Recommendations</h2>
      <div class="recommendations">
        ${recommendations.map((rec: string) => `
          <div class="recommendation-item">${rec}</div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h2>🚀 Next Steps</h2>
      <div class="next-steps" style="counter-reset: step-counter;">
        <div class="step">Download our comprehensive Influencer Marketing Playbook</div>
        <div class="step">Join our waitlist for early platform access</div>
        <div class="step">Schedule a strategy call with our team</div>
        <div class="step">Start building your creator network</div>
      </div>
    </div>
  `
}

function generateCreatorReport(quizData: any, results: any) {
  const income = results.income || { monthly: 2500, yearly: 30000, potential: 6250 }
  const recommendations = results.recommendations || []
  
  return `
    <div class="section">
      <h2>💰 Your Income Analysis</h2>
      <div class="metrics-grid">
        <div class="metric-card">
          <div class="metric-value">$${income.monthly.toLocaleString()}</div>
          <div class="metric-label">Monthly Income Potential</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">$${income.yearly.toLocaleString()}</div>
          <div class="metric-label">Yearly Income Potential</div>
        </div>
        <div class="metric-card">
          <div class="metric-value">$${income.potential.toLocaleString()}</div>
          <div class="metric-label">10X Potential</div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>📱 Creator Profile</h2>
      <div class="quiz-summary">
        <div class="summary-item">
          <span class="summary-label">Primary Platform:</span>
          <span class="summary-value">${quizData.platform || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Follower Count:</span>
          <span class="summary-value">${quizData.followers || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Engagement Rate:</span>
          <span class="summary-value">${quizData.engagement || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Content Niche:</span>
          <span class="summary-value">${quizData.niche || 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Content Types:</span>
          <span class="summary-value">${Array.isArray(quizData.contentType) ? quizData.contentType.join(', ') : 'Not specified'}</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Experience Level:</span>
          <span class="summary-value">${quizData.experience || 'Not specified'}</span>
        </div>
      </div>
    </div>

    <div class="section">
      <h2>🎯 Growth Recommendations</h2>
      <div class="recommendations">
        ${recommendations.map((rec: string) => `
          <div class="recommendation-item">${rec}</div>
        `).join('')}
      </div>
    </div>

    <div class="section">
      <h2>🚀 Next Steps</h2>
      <div class="next-steps" style="counter-reset: step-counter;">
        <div class="step">Download our Creator Monetization Guide</div>
        <div class="step">Join our creator community for early access</div>
        <div class="step">Create your creator profile and portfolio</div>
        <div class="step">Start connecting with brands in your niche</div>
      </div>
    </div>
  `
} 