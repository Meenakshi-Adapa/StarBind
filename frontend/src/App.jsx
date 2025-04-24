import React from "react";
import starbindLogo from "../images/starbind_logo.png";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Navigation Bar */}
      <nav className="bg-white shadow flex items-center justify-between px-6 py-3">
        <div className="flex items-center">
          <img src={starbindLogo} alt="StarBind Logo" className="h-10 w-10 mr-3" />
          <span className="text-2xl font-bold text-blue-700">StarBind</span>
        </div>
        <div className="flex items-center space-x-6">
          <button className="text-gray-600 hover:text-blue-700">Home</button>
          <button className="text-gray-600 hover:text-blue-700">My Network</button>
          <button className="text-gray-600 hover:text-blue-700">Jobs</button>
          <button className="text-gray-600 hover:text-blue-700">Messaging</button>
          <button className="text-gray-600 hover:text-blue-700">Notifications</button>
        </div>
        <div>
          <img src="https://ui-avatars.com/api/?name=Adapa+Meenakshi" alt="Profile" className="h-9 w-9 rounded-full" />
        </div>
      </nav>
      {/* Main Content */}
      <div className="flex flex-1 mt-4 px-6 gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://ui-avatars.com/api/?name=Adapa+Meenakshi" alt="Profile" className="h-20 w-20 rounded-full mb-3" />
          <h2 className="text-lg font-semibold">Adapa Meenakshi</h2>
          <p className="text-sm text-gray-500 mb-1">Attending Geethanjali College of Engineering</p>
          <p className="text-xs text-gray-400 mb-2">Hyderabad, Telangana</p>
          <div className="w-full border-t pt-3 mt-3">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-600">Profile viewers</span>
              <span className="font-bold text-blue-700">146</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Post impressions</span>
              <span className="font-bold text-blue-700">61</span>
            </div>
          </div>
        </aside>
        {/* Feed */}
        <main className="flex-1">
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex items-center mb-4">
              <img src="https://ui-avatars.com/api/?name=Adapa+Meenakshi" alt="Profile" className="h-10 w-10 rounded-full mr-3" />
              <input
                type="text"
                placeholder="Start a post"
                className="flex-1 border rounded-full px-4 py-2 bg-gray-100 focus:outline-none"
              />
            </div>
            <div className="flex justify-between">
              <button className="flex items-center text-gray-600 hover:text-blue-700">
                <span className="material-icons mr-1">image</span> Media
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-700">
                <span className="material-icons mr-1">event</span> Event
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-700">
                <span className="material-icons mr-1">article</span> Write article
              </button>
            </div>
          </div>
          {/* Example Feed Post */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-2">
              <img src="https://ui-avatars.com/api/?name=Suprika+RK" alt="Suprika RK" className="h-10 w-10 rounded-full mr-3" />
              <div>
                <span className="font-semibold">Suprika RK</span>
                <span className="text-xs text-gray-400 ml-2">2d</span>
                <div className="text-xs text-gray-500">Ex-DROD Intern | Building Startups</div>
              </div>
            </div>
            <div className="mb-2">
              <p className="mb-1">A sneak peek into what’s cooking! 🛠️💡</p>
              <p>Here’s a glimpse of my upcoming portfolio website — stay tuned for the full launch!</p>
            </div>
            <div className="rounded-lg overflow-hidden border mt-2">
              <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" alt="Portfolio Preview" className="w-full h-48 object-cover" />
            </div>
          </div>
        </main>
        {/* Right Sidebar (optional) */}
        <aside className="w-1/4 hidden xl:block"></aside>
      </div>
    </div>
  );
}

export default App;