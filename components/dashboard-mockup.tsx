import { Globe, TrendingUp, Users, BarChart3 } from "lucide-react"

export function DashboardMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-xl shadow-2xl border overflow-hidden">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b bg-muted/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-2 px-3 py-1 bg-muted rounded-md text-xs text-muted-foreground">
            <Globe className="w-3 h-3" />
            dashboard.growthai.id
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-56 border-r bg-muted/20 p-4 hidden md:block">
          <div className="flex items-center gap-2 mb-6">
            <div className="text-xs font-bold text-blue-500">GA</div>
            <span className="text-sm font-medium">@CreatorMuda</span>
          </div>
          <nav className="space-y-1">
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm bg-muted rounded">
              <span>📊</span> Dashboard
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <span>📈</span> Analytics
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <span>🎯</span> Strategy
            </div>
            <div className="flex items-center gap-2 px-2 py-1.5 text-sm text-muted-foreground">
              <span>⚙️</span> Settings
            </div>
          </nav>
          <div className="mt-auto pt-8">
            <div className="text-xs text-muted-foreground">Followers Growth</div>
            <div className="text-2xl font-bold text-blue-500">+1,450</div>
            <div className="text-xs text-green-600 mt-1">↑ +27% this month</div>
            <div className="flex items-center gap-2 mt-4">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                <span className="text-white text-xs font-bold">CM</span>
              </div>
              <span className="text-sm">Creator Muda</span>
            </div>
          </div>
        </div>

        {/* Growth panel */}
        <div className="w-64 border-r p-4 hidden lg:block">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-medium">Growth Stats</h3>
            <div className="flex gap-1">
              <button className="px-3 py-1 text-xs bg-muted rounded">Week</button>
              <button className="px-3 py-1 text-xs text-muted-foreground">Month</button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <label className="text-sm font-semibold">Followers</label>
              </div>
              <div className="text-2xl font-bold">12,450</div>
              <div className="text-xs text-green-600 mt-1">+850 this week</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <BarChart3 className="w-4 h-4 text-purple-500" />
                <label className="text-sm font-semibold">Engagement</label>
              </div>
              <div className="text-2xl font-bold">4.2%</div>
              <div className="text-xs text-green-600 mt-1">+0.8% this week</div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-4 h-4 text-green-500" />
                <label className="text-sm font-semibold">Reach</label>
              </div>
              <div className="text-2xl font-bold">48.5K</div>
              <div className="text-xs text-green-600 mt-1">+12K this week</div>
            </div>
          </div>
          <div className="flex gap-2 mt-6">
            <button className="flex-1 px-3 py-2 text-sm border rounded text-xs">Optimization</button>
            <button className="flex-1 px-3 py-2 text-sm bg-blue-500 text-white rounded text-xs">Strategy</button>
          </div>
        </div>

        {/* Analytics view */}
        <div className="flex-1 p-4">
          <AnalyticsView />
        </div>
      </div>
    </div>
  )
}

function AnalyticsView() {
  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Performance Analytics</h3>
          <p className="text-xs text-muted-foreground">Last 7 days</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs bg-muted rounded">Day</button>
          <button className="px-3 py-1 text-xs bg-blue-500 text-white rounded">Week</button>
          <button className="px-3 py-1 text-xs text-muted-foreground">Month</button>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-gradient-to-br from-blue-50 to-transparent rounded-lg p-4 border">
          <p className="text-xs text-muted-foreground mb-2">Followers Growth</p>
          <div className="h-24 flex items-end gap-1">
            <div className="flex-1 bg-blue-200 rounded" style={{ height: "30%" }} />
            <div className="flex-1 bg-blue-300 rounded" style={{ height: "45%" }} />
            <div className="flex-1 bg-blue-400 rounded" style={{ height: "60%" }} />
            <div className="flex-1 bg-blue-500 rounded" style={{ height: "75%" }} />
            <div className="flex-1 bg-blue-600 rounded" style={{ height: "85%" }} />
            <div className="flex-1 bg-blue-600 rounded" style={{ height: "90%" }} />
            <div className="flex-1 bg-blue-500 rounded" style={{ height: "80%" }} />
          </div>
          <p className="text-xs text-green-600 mt-2 font-semibold">↑ +12.5% vs last week</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-transparent rounded-lg p-4 border">
          <p className="text-xs text-muted-foreground mb-2">Engagement Rate</p>
          <div className="h-24 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4.2%</div>
              <p className="text-xs text-purple-600 mt-1">Average</p>
            </div>
          </div>
          <p className="text-xs text-green-600 mt-2 font-semibold">↑ +0.8% vs last week</p>
        </div>
      </div>

      {/* Recent insights */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
        <p className="text-xs font-semibold text-yellow-900 mb-1">💡 AI Insight</p>
        <p className="text-xs text-yellow-800">Posting pada jam 19:00-21:00 memberikan engagement 35% lebih tinggi. Pertahankan jadwal posting optimal ini.</p>
      </div>
    </div>
  )
}
