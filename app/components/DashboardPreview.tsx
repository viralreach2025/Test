'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getAnimationProps, shouldDisableAnimations } from '../../lib/utils';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Users, 
  Eye, 
  Target, 
  Search, 
  Filter, 
  Calendar,
  MessageSquare,
  CheckCircle,
  Clock,
  Star,
  Zap,
  Globe,
  Instagram,
  Youtube,
  ArrowUpRight,
  Settings,
  Bell,
  User,
  Plus
} from 'lucide-react';

type DashboardView = 'overview' | 'campaigns' | 'creators' | 'analytics' | 'messages';

export function DashboardPreview() {
  const [currentView, setCurrentView] = useState<DashboardView>('overview');
  const [isLive, setIsLive] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second for real-time feel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit'
    });
  };

  const renderOverview = () => (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-4 border border-blue-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-blue-600 font-medium">Total Reach</p>
              <p className="text-2xl font-bold text-blue-900">2.4M</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +12% this week
              </p>
            </div>
            <Eye className="w-8 h-8 text-blue-500" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-green-600 font-medium">Engagement Rate</p>
              <p className="text-2xl font-bold text-green-900">8.2%</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +3.1% this week
              </p>
            </div>
            <TrendingUp className="w-8 h-8 text-green-500" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-4 border border-purple-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-purple-600 font-medium">Revenue</p>
              <p className="text-2xl font-bold text-purple-900">$12.5K</p>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                +45% this week
              </p>
            </div>
            <DollarSign className="w-8 h-8 text-purple-500" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-orange-600 font-medium">Active Campaigns</p>
              <p className="text-2xl font-bold text-orange-900">7</p>
              <p className="text-xs text-blue-600 flex items-center mt-1">
                <Clock className="w-3 h-3 mr-1" />
                3 ending soon
              </p>
            </div>
            <Target className="w-8 h-8 text-orange-500" />
          </div>
        </motion.div>
      </div>

      {/* Live Campaigns */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Live Campaigns</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Real-time updates</span>
          </div>
        </div>
        
                <div className="space-y-3">
          {[
            { name: "Summer Skincare Launch", platform: "Instagram", progress: 75, status: "active", reach: "1.2M", engagement: "6.8%" },
            { name: "Fitness App Promotion", platform: "TikTok", progress: 45, status: "active", reach: "890K", engagement: "12.3%" },
            { name: "Eco-Friendly Products", platform: "YouTube", progress: 90, status: "ending", reach: "2.1M", engagement: "9.1%" }
          ].map((campaign, index) => (
            <motion.div
              key={campaign.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors space-y-3 sm:space-y-0"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                  {campaign.platform === 'Instagram' && <Instagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                  {campaign.platform === 'TikTok' && <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                  {campaign.platform === 'YouTube' && <Youtube className="w-4 h-4 sm:w-5 sm:h-5 text-white" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900 text-sm sm:text-base">{campaign.name}</p>
                  <p className="text-xs sm:text-sm text-gray-500">{campaign.platform} • {campaign.reach} reach</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="flex items-center space-x-2">
                  <div className="w-16 bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        campaign.status === 'ending' ? 'bg-orange-500' : 'bg-green-500'
                      }`}
                      style={{ width: `${campaign.progress}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-medium text-gray-700">{campaign.progress}%</span>
                </div>
                <p className="text-xs text-gray-500">{campaign.engagement} engagement</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Performance Trend</h3>
          <div className="flex items-center space-x-2">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm text-green-600">+23% vs last month</span>
          </div>
        </div>
        <div className="h-32 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border flex items-center justify-center">
          <div className="text-center">
            <BarChart3 className="w-8 h-8 text-gray-400 mx-auto mb-2" />
            <p className="text-sm text-gray-500">Interactive performance chart</p>
            <p className="text-xs text-gray-400">Shows reach, engagement, and revenue trends</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCampaigns = () => (
    <div className="space-y-6">
      {/* Campaign Creation */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Create New Campaign</h3>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:from-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Campaign</span>
          </button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Campaign Goal</label>
              <select className="w-full p-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                <option>Brand Awareness</option>
                <option>Lead Generation</option>
                <option>Sales Conversion</option>
                <option>Product Launch</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
              <div className="flex space-x-2">
                <input type="number" placeholder="$2,000" className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
                <span className="text-gray-500 self-center">to</span>
                <input type="number" placeholder="$5,000" className="flex-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Audience</label>
              <input type="text" placeholder="Women 25-35, Lifestyle & Beauty" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Platforms</label>
              <div className="flex space-x-2">
                <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Instagram className="w-4 h-4 text-pink-500" />
                  <span className="text-sm">Instagram</span>
                </button>
                                 <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                   <Globe className="w-4 h-4 text-black" />
                   <span className="text-sm">TikTok</span>
                 </button>
                <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Youtube className="w-4 h-4 text-red-500" />
                  <span className="text-sm">YouTube</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Campaigns */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Campaigns</h3>
        <div className="space-y-4">
          {[
            { name: "Summer Skincare Launch", status: "Live", budget: "$3,500", spent: "$2,100", reach: "1.2M", engagement: "6.8%", daysLeft: 12 },
            { name: "Fitness App Promotion", status: "Live", budget: "$2,000", spent: "$890", reach: "890K", engagement: "12.3%", daysLeft: 8 },
            { name: "Eco-Friendly Products", status: "Ending", budget: "$5,000", spent: "$4,750", reach: "2.1M", engagement: "9.1%", daysLeft: 2 }
          ].map((campaign, index) => (
            <div key={campaign.name} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-3">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${campaign.status === 'Live' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                  <h4 className="font-medium text-gray-900 text-sm sm:text-base">{campaign.name}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    campaign.status === 'Live' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                  }`}>
                    {campaign.status}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm text-gray-500">{campaign.daysLeft} days left</p>
                </div>
              </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-sm">
                <div>
                  <p className="text-gray-500">Budget</p>
                  <p className="font-medium">{campaign.budget}</p>
                </div>
                <div>
                  <p className="text-gray-500">Spent</p>
                  <p className="font-medium">{campaign.spent}</p>
                </div>
                <div>
                  <p className="text-gray-500">Reach</p>
                  <p className="font-medium">{campaign.reach}</p>
                </div>
                <div>
                  <p className="text-gray-500">Engagement</p>
                  <p className="font-medium">{campaign.engagement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCreators = () => (
    <div className="space-y-6">
      {/* Creator Discovery */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">AI Creator Matches</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Live Matching</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {[
            { name: "Sarah Style", match: "98%", followers: "125K", niche: "Lifestyle", platform: "Instagram", engagement: "8.2%", avatar: "SS" },
            { name: "Emma Lifestyle", match: "95%", followers: "89K", niche: "Beauty", platform: "TikTok", engagement: "12.5%", avatar: "EL" },
            { name: "Maya Fashion", match: "92%", followers: "156K", niche: "Fashion", platform: "YouTube", engagement: "6.8%", avatar: "MF" },
            { name: "Alex Fitness", match: "89%", followers: "78K", niche: "Fitness", platform: "Instagram", engagement: "9.1%", avatar: "AF" }
          ].map((creator, index) => (
            <motion.div
              key={creator.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100 hover:shadow-md transition-shadow space-y-3 sm:space-y-0"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {creator.avatar}
                </div>
                <div>
                  <div className="font-medium text-gray-900">{creator.name}</div>
                  <div className="text-sm text-gray-500">{creator.followers} • {creator.niche}</div>
                  <div className="flex items-center space-x-2 mt-1">
                                         {creator.platform === 'Instagram' && <Instagram className="w-3 h-3 text-pink-500" />}
                     {creator.platform === 'TikTok' && <Globe className="w-3 h-3 text-black" />}
                     {creator.platform === 'YouTube' && <Youtube className="w-3 h-3 text-red-500" />}
                    <span className="text-xs text-gray-500">{creator.engagement} engagement</span>
                  </div>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-lg font-bold text-green-600">{creator.match}</div>
                <div className="text-xs text-gray-500">match</div>
                <button className="mt-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-lg text-xs hover:from-pink-600 hover:to-purple-700 transition-all duration-300">
                  Contact
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Collaboration Status */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Collaborations</h3>
        <div className="space-y-4">
          {[
            { creator: "Sarah Style", campaign: "Summer Skincare", status: "Content Review", progress: "75%", timeLeft: "2 days" },
            { creator: "Emma Lifestyle", campaign: "Fitness App", status: "Content Creation", progress: "45%", timeLeft: "5 days" },
            { creator: "Maya Fashion", campaign: "Eco Products", status: "Published", progress: "100%", timeLeft: "Complete" }
          ].map((collab, index) => (
            <div key={collab.creator} className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-gray-900">{collab.creator}</h4>
                  <p className="text-sm text-gray-500">{collab.campaign}</p>
                </div>
                <div className="text-right">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    collab.status === 'Published' ? 'bg-green-100 text-green-700' :
                    collab.status === 'Content Review' ? 'bg-blue-100 text-blue-700' :
                    'bg-yellow-100 text-yellow-700'
                  }`}>
                    {collab.status}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full ${
                      collab.progress === '100%' ? 'bg-green-500' : 'bg-blue-500'
                    }`}
                    style={{ width: collab.progress }}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">{collab.timeLeft}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderAnalytics = () => (
    <div className="space-y-6">
      {/* Real-time Analytics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Real-time Analytics</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">Live data</span>
            <span className="text-sm text-gray-400">{formatTime(currentTime)}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">2.4M</div>
            <div className="text-sm text-gray-600">Total Reach</div>
            <div className="text-xs text-green-600">+12% vs last week</div>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">8.2%</div>
            <div className="text-sm text-gray-600">Engagement Rate</div>
            <div className="text-xs text-green-600">+3.1% vs last week</div>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <div className="text-2xl font-bold text-purple-600">$12.5K</div>
            <div className="text-sm text-gray-600">Revenue Generated</div>
            <div className="text-xs text-green-600">+45% vs last week</div>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <div className="text-2xl font-bold text-orange-600">1,247</div>
            <div className="text-sm text-gray-600">Clicks</div>
            <div className="text-xs text-green-600">+28% vs last week</div>
          </div>
        </div>
        
        <div className="bg-gray-50 rounded-lg p-4">
          <div className="flex items-center space-x-2 mb-3">
            <TrendingUp className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium text-gray-700">Performance Trend</span>
          </div>
          <div className="h-20 bg-white rounded border flex items-center justify-center">
            <div className="text-xs text-gray-500">📈 Interactive analytics dashboard with real-time charts</div>
          </div>
        </div>
      </div>

      {/* Platform Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Performance</h3>
        <div className="space-y-4">
          {[
            { platform: "Instagram", reach: "1.2M", engagement: "6.8%", revenue: "$8.2K", color: "pink" },
            { platform: "TikTok", reach: "890K", engagement: "12.3%", revenue: "$3.1K", color: "black" },
            { platform: "YouTube", reach: "310K", engagement: "4.2%", revenue: "$1.2K", color: "red" }
          ].map((platform, index) => (
            <div key={platform.platform} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 bg-gray-50 rounded-lg space-y-3 sm:space-y-0">
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  platform.color === 'pink' ? 'bg-pink-500' :
                  platform.color === 'black' ? 'bg-black' :
                  'bg-red-500'
                }`}>
                                     {platform.platform === 'Instagram' && <Instagram className="w-5 h-5 text-white" />}
                   {platform.platform === 'TikTok' && <Globe className="w-5 h-5 text-white" />}
                   {platform.platform === 'YouTube' && <Youtube className="w-5 h-5 text-white" />}
                </div>
                <div>
                  <p className="font-medium text-gray-900">{platform.platform}</p>
                  <p className="text-sm text-gray-500">{platform.reach} reach</p>
                </div>
              </div>
              <div className="text-left sm:text-right">
                <p className="font-medium text-gray-900">{platform.engagement}</p>
                <p className="text-sm text-gray-500">engagement</p>
                <p className="text-sm font-medium text-green-600">{platform.revenue}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderMessages = () => (
    <div className="space-y-6">
      {/* Messages */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Campaign Messages</h3>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-gray-500">3 unread</span>
          </div>
        </div>
        
        <div className="space-y-4">
          {[
            { creator: "Sarah Style", message: "Love the brief! Will have content ready by Friday.", time: "2 hours ago", status: "unread" },
            { creator: "Emma Lifestyle", message: "Can we discuss the video format requirements?", time: "4 hours ago", status: "read" },
            { creator: "Maya Fashion", message: "Content uploaded and ready for review!", time: "1 day ago", status: "read" }
          ].map((msg, index) => (
            <div key={index} className={`p-4 rounded-lg border ${
              msg.status === 'unread' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
            }`}>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {msg.creator.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{msg.creator}</h4>
                    <span className="text-sm text-gray-500">{msg.time}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{msg.message}</p>
                  {msg.status === 'unread' && (
                    <div className="flex items-center space-x-2 mt-2">
                      <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors">
                        Reply
                      </button>
                      <button className="text-xs bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600 transition-colors">
                        Mark Read
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <MessageSquare className="w-6 h-6 text-blue-500 mb-2" />
            <p className="font-medium text-gray-900">Send Message</p>
            <p className="text-sm text-gray-500">Contact creators</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Plus className="w-6 h-6 text-green-500 mb-2" />
            <p className="font-medium text-gray-900">New Campaign</p>
            <p className="text-sm text-gray-500">Create campaign</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <Search className="w-6 h-6 text-purple-500 mb-2" />
            <p className="font-medium text-gray-900">Find Creators</p>
            <p className="text-sm text-gray-500">Discover matches</p>
          </button>
          <button className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left">
            <BarChart3 className="w-6 h-6 text-orange-500 mb-2" />
            <p className="font-medium text-gray-900">View Reports</p>
            <p className="text-sm text-gray-500">Analytics & insights</p>
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 w-full max-w-6xl mx-auto overflow-hidden">
      {/* Dashboard Header */}
      <div className="border-b border-gray-200 p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-3 sm:space-x-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-gray-900">ViralReach Dashboard</h2>
              <p className="text-xs sm:text-sm text-gray-500">Influencer Marketing Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs sm:text-sm text-gray-500">Live</span>
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <User className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 px-4 sm:px-6 overflow-x-auto">
        <div className="flex space-x-4 sm:space-x-8 min-w-max">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'campaigns', label: 'Campaigns', icon: Target },
            { id: 'creators', label: 'Creators', icon: Users },
            { id: 'analytics', label: 'Analytics', icon: TrendingUp },
            { id: 'messages', label: 'Messages', icon: MessageSquare }
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setCurrentView(tab.id as DashboardView)}
                className={`flex items-center space-x-1 sm:space-x-2 py-3 sm:py-4 px-2 border-b-2 transition-colors whitespace-nowrap ${
                  currentView === tab.id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium text-sm sm:text-base">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView}
            {...getAnimationProps(
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0 },
              { duration: 0.3 }
            )}
            exit={shouldDisableAnimations() ? undefined : { opacity: 0, y: -20 }}
          >
            {currentView === 'overview' && renderOverview()}
            {currentView === 'campaigns' && renderCampaigns()}
            {currentView === 'creators' && renderCreators()}
            {currentView === 'analytics' && renderAnalytics()}
            {currentView === 'messages' && renderMessages()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
} 