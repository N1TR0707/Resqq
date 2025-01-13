import { LayoutDashboard, Settings, Info } from "lucide-react";

function Sider() {
    return (
        <aside className="w-64 bg-blue-600 text-white min-h-screen shadow-lg">
            <div className="p-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold tracking-wider text-center text-white">
                        ResQ
                    </h1>
                    <div className="mt-2 h-1 w-16 bg-white mx-auto rounded-full" />
                </div>

                {/* Navigation */}
                <nav className="space-y-2">
                    <ul className="space-y-1">
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:pl-6 group"
                            >
                                <LayoutDashboard className="w-5 h-5 text-white group-hover:text-blue-600" />
                                <span className="font-medium group-hover:text-blue-600">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:pl-6 group"
                            >
                                <Settings className="w-5 h-5 text-white group-hover:text-blue-600" />
                                <span className="font-medium group-hover:text-blue-600">Settings</span>
                            </a>
                        </li>
                        <li>
                            <a
                                href="/dashboard"
                                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 hover:bg-blue-500 hover:pl-6 group"
                            >
                                <Info className="w-5 h-5 text-white group-hover:text-blue-600" />
                                <span className="font-medium group-hover:text-blue-600">Tentang Apps</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sider;
