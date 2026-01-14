<template>
    <div>
        <div class="relative min-h-screen bg-gradient-to-b from-blue-400 to-gray-200 dark:from-blue-950 dark:to-gray-900 px-6 py-10 sm:px-16">
            
            <!-- Header -->
            <div class="max-w-[900px] mx-auto mb-12">
                <div class="flex justify-center mb-8 pt-8">
                    <a href="https://ev4eu.rid-ppcinspectra.com/" target="_blank" class="bg-gray-200 dark:bg-gray-700 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
                        <img src="/assets/images/auth/ev4eu_logo_trasparent.png" alt="EV4EU Logo" class="h-16" />
                    </a>
                </div>
                <div class="text-center">
                    <h1 class="text-3xl font-bold text-white dark:text-white mb-4">Welcome to EV4EU Greek Demo</h1>
                    <p class="text-white/95 dark:text-white/95">Ready to charge? Here's how.</p>
                </div>
            </div>

            <!-- Timeline -->
            <ul class="relative py-12 before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:bottom-0 before:left-1/2 before:top-0 before:w-[3px] before:-ml-[1.5px] max-w-[900px] mx-auto table">
                
                <!-- Timeline Item 1 - SIGN IN -->  
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Sign in.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Log in to the Platform</h4>
                            <p class="mb-3">
                                First, log in to the platform. If you are a new user, select the 
                                <span class="bg-purple-400 text-white px-0.5 py-0.5 rounded-md">REGISTER</span> option.
                            </p>
                            <p class="mb-3">
                                If you have forgotten your password, you can select the 
                                <span class="bg-purple-400 text-white px-0.5 py-0.5 rounded-md">Forgot Password?</span> option to retrieve your account.
                            </p>
                        </div>
                    </div>
                </li>

                <!-- Timeline Item 2 - SIGN UP -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Sign_up.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Create Account</h4>
                            <p class="mb-3">Please fill out all the fields to create your account.</p>
                            <p>Then select the <span class="bg-purple-400 text-white px-0.5 py-0.5 rounded-md">SIGN IN</span> option to log in.</p>
                        </div>
                    </div>
                </li>
                
                <!-- Timeline Item 3 - PLATFORM OVERVIEW -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Map_all_connectors.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Platform Overview</h4>
                            <p class="mb-3">When logged in, you can see 3 tabs:</p>
                            
                            <ul class="list-disc list-inside space-y-2 mb-3">
                                <li class="font-medium">
                                    The Main Dashboard, where you can see:
                                    <ul class="list-none ml-6 mt-2 space-y-1.5 text-sm">
                                        <li class="flex items-start gap-2">
                                            <span class="text-blue-500 mt-1">→</span>
                                            <span>
                                                The Chargepoint map with real-time charger status. Available chargers are marked with:
                                                <span class="inline-flex items-center gap-2">
                                                    <svg width="24" height="32" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg" class="inline-block">
                                                        <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 26 16 26s16-17.163 16-26C32 7.163 24.837 0 16 0z" fill="#17a2b8" stroke="#fff" stroke-width="2"></path>
                                                        <circle cx="16" cy="16" r="6" fill="#fff"></circle>
                                                    </svg>
                                                    <svg width="24" height="32" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg" class="inline-block">
                                                        <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 26 16 26s16-17.163 16-26C32 7.163 24.837 0 16 0z" fill="#28a745" stroke="#fff" stroke-width="2"></path>
                                                        <circle cx="16" cy="16" r="6" fill="#fff"></circle>
                                                    </svg>
                                                </span>
                                            </span>
                                        </li>

                                        <li class="flex items-start gap-2">
                                            <span class="text-blue-500 mt-1">→</span>
                                            <span>
                                                While <span class="text-red-600 px-0.5 py-0.5 rounded-md">NOT AVAILABLE</span> chargers are marked with:
                                                <span class="inline-flex items-center gap-2">
                                                    <svg width="24" height="32" viewBox="0 0 32 42" xmlns="http://www.w3.org/2000/svg" class="inline-block">
                                                        <path d="M16 0C7.163 0 0 7.163 0 16c0 8.837 16 26 16 26s16-17.163 16-26C32 7.163 24.837 0 16 0z" fill="#fd7e14" stroke="#fff" stroke-width="2"></path>
                                                        <circle cx="16" cy="16" r="6" fill="#fff"></circle>
                                                    </svg>
                                                </span>
                                            </span>
                                        </li>

                                        <li class="flex items-start gap-2">
                                            <span class="text-blue-500 mt-1">→</span>
                                            <span>The Routing Options</span>
                                        </li>

                                        <li class="flex items-start gap-2">
                                            <span class="text-blue-500 mt-1">→</span>
                                            <span>The Weather Map <img class="w-7 ml-[5px] inline-block" src="/assets/images/maps/weather.png" alt="Weather icon" /></span>
                                        </li>

                                        <li class="flex items-start gap-2">
                                            <span class="text-blue-500 mt-1">→</span>
                                            <span>Your account credits located in the top right corner <span class="bg-gray-200 text-green-600 px-0.5 py-0.5 rounded-md">100.00</span></span>
                                        </li>
                                    </ul>
                                </li>
                                <li class="font-medium">The Profile Overview</li>
                                <li class="font-medium">The My Sessions</li>
                            </ul>
                        </div>
                    </div>
                </li>

                <!-- Timeline Item 3.5 - Routing -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Routing.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Routing Options</h4>
                            <p class="mb-3">In this panel, you can:</p>
                            
                            <ul class="list-disc list-inside space-y-2 mb-3">
                                <li>Set addresses in the search bars</li>
                                <li>Click on markers and select <span class="bg-blue-500 text-white px-1 py-0.5 rounded-md">ROUTE</span></li>
                                <li>Get directions between locations</li>
                                <li>Apply your current GPS-based location</li>
                                <li>Search based on your location and find the closest markers within range</li>
                                <li>Set the charging amount and see the estimated charging time</li>
                                <li>Open directions in Google Maps: <span class="bg-purple-500 text-white px-0.5 py-0.5 rounded-md">Open in Google Maps</span></li>
                            </ul>
                        </div>
                    </div>
                </li>   

                <!-- Timeline Item 4 - Weather Map -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Windy Map.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Weather Map</h4>
                            <p class="mb-3">Here you can see the weather conditions and forecast for your regions of interest.</p>
                        </div>
                    </div>
                </li>

                <!-- Timeline Item 5 - Profile Overview -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Profile Overview.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Profile Overview</h4>
                            <p class="mb-3">By selecting the Profile Overview tab, you can modify your settings and view your virtual charging tag.</p>
                        </div>
                    </div>
                </li>

                <!-- Timeline Item 6 - MY SESSIONS BEFORE -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/My_Sessions_Before.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">My Sessions</h4>
                            <p class="mb-3">Here you can view your active charging session (if any) and observe your general session statistics:</p>
                            <div class="flex flex-wrap gap-2 mb-3">
                                <span class="bg-blue-300 text-blue-600 px-0.5 py-0.5 rounded-md">Total Sessions</span> 
                                <span class="bg-green-300 text-green-600 px-0.5 py-0.5 rounded-md">Total Spent</span>
                                <span class="bg-purple-300 text-purple-600 px-0.5 py-0.5 rounded-md">Total Energy</span>
                                <span class="bg-orange-300 text-orange-600 px-0.5 py-0.5 rounded-md">Avg. Session Price</span>
                            </div>
                            <p>You can also view each session in more detail (see image below).</p>
                        </div>
                    </div>
                </li>

                <!-- Timeline Item 7 - MY SESSIONS IN DETAILS -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/My_Sessions_Before_stats.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">My Sessions Stats</h4>
                            <p class="mb-3">Here you can view your detailed charging session history.</p>
                        </div>
                    </div>
                </li>                

                <!-- Timeline Item 8 - Charger Statuses -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Green_2_2.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Charging Operation</h4>
                            <p class="mb-3">
                                When you have successfully arrived at an available charger, you will see the charger status as 
                                <span style="display: inline-block; padding: 2px 8px; background-color: #28a745; color: white; border-radius: 12px; font-weight: 600; font-size: 10px;">
                                    ✅ Available
                                </span>
                            </p>
                            <p>You are now ready to plug your EV's charging cable into the charger. See the next image for the next phase.</p>
                        </div>
                    </div>
                </li>   

                <!-- Timeline Item 9 - STATUS PREPARING -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Blue_1_2.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Charging Operation (Connected Cable)</h4>
                            <p class="mb-3">
                                When you have successfully connected the cable to both your EV and the charger, the charger status will change to 
                                <span style="display: inline-block; padding: 2px 8px; background-color: #007bff; color: white; border-radius: 12px; font-weight: 600; font-size: 10px;">
                                    🔄 Preparing
                                </span>
                            </p>
                            <p>Now you can press the <span class="bg-green-500 text-white px-0.5 py-0.5 rounded-md">Start</span> button to begin charging!</p>
                        </div>
                    </div>
                </li>          

                <!-- Timeline Item 10 - Charging Notification -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/My_Sessions_Charging.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Charging Notification</h4>
                            <p class="mb-3">When you start the charging session, the My Sessions tab will display an active red notification showing the current power (Watts) and energy consumed (Watt-hours).</p>
                            <p>You can also stop the transaction whenever you want.</p>
                        </div>
                    </div>
                </li>

                <!-- Timeline Item 11 - POPUP -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/My_Sessions_Survey.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Survey Section</h4>
                            <p class="mb-3">After stopping your charging session, your feedback is important for the project's analytics and insights.</p>
                            <p class="mb-3">Your anonymized contribution is needed and deeply appreciated.</p>
                            <p>⚠️ Note: This will open <span class="font-bold text-orange-500 bg-orange-100 dark:bg-orange-900/30 px-2 py-0.5 rounded">TWO</span> separate survey tabs (please disable pop-up blocking)</p>
                        </div>
                    </div>
                </li>          

                <!-- Timeline Item 12 - SIGN OUT -->
                <li class="relative mb-12 before:clear-both before:table after:clear-both after:table">
                    <div class="hidden sm:block absolute bg-blue-500 border-[3px] border-[#ebedf2] dark:border-[#191e3a] w-5 h-5 rounded-full left-1/2 top-[32px] -ml-2.5 z-[1]"></div>
                    <div class="relative border border-[#ebedf2] dark:border-[#191e3a] max-w-[320px] mx-auto sm:max-w-full w-full sm:w-[46%] shadow-[0_20px_20px_rgba(126,142,177,0.12)] rounded-md bg-white/60 backdrop-blur-lg dark:bg-black/50 ltr:sm:float-left rtl:sm:float-right before:absolute before:bg-[#ebedf2] dark:before:bg-[#191e3a] before:w-[37px] before:h-[3px] before:rounded-full ltr:before:-right-[37px] rtl:before:-left-[37px] before:top-10 sm:before:block before:hidden">
                        <div>
                            <img src="/assets/images/welcome_folder/Sign_out.jpg" alt="timeline" class="w-full rounded-t-md" />
                        </div>
                        <div class="p-5">
                            <h4 class="mb-3 text-blue-500 text-lg font-semibold">Sign Out</h4>
                            <p class="mb-3">To sign out from the platform, select the User icon and then select the <span class="font-bold text-white bg-red-500 px-2 py-0.5 rounded">Sign Out</span> option.</p>
                        </div>
                    </div>
                </li>

            </ul>
            <!-- Enrollment Call to Action -->
            <div class="max-w-[900px] mx-auto mt-12 mb-8">
                <div class="bg-white/80 backdrop-blur-lg dark:bg-black/60 rounded-lg p-8 border-2 border-blue-500 dark:border-blue-400 shadow-xl text-center">
                    <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">Ready to Start Charging?</h3>
                    <p class="text-gray-700 dark:text-gray-300 mb-6">Join the EV4EU platform and start your electric vehicle charging journey today!</p>
                    
                    <a href="https://ev4eu.rid-ppcinspectra.com/" target="_blank" class="inline-block mb-6 hover:scale-105 transition-transform">
                        <div class="bg-gray-200 dark:bg-gray-700 rounded-2xl p-6 shadow-lg inline-block">
                            <img src="/assets/images/auth/ev4eu_logo_trasparent.png" alt="EV4EU Logo" class="h-20" />
                        </div>
                    </a>
                    
                    <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a href="https://ev4eu.rid-ppcinspectra.com/" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                            Enroll Now
                        </a>
                    </div>
                </div>
            </div>
            <!-- EU Disclaimer Footer -->
            <div class="max-w-[900px] mx-auto mt-12 mb-8">
                <div class="bg-white/60 backdrop-blur-lg dark:bg-black/50 rounded-md p-6 border border-[#ebedf2] dark:border-[#191e3a]">
                    <div class="flex items-center text-xs text-gray-700 dark:text-gray-300">
                        <img src="/assets/images/auth/eu-logo.jpg" alt="EU Logo" class="h-8 mr-3 flex-shrink-0" />
                        <p class="text-[10px] leading-tight">
                            This document has been produced in the context of the EV4EU project. 
                            Views and opinions expressed in this document are however those of the authors only and do not necessarily reflect those of the European Union or the European Climate, 
                            Infrastructure and Environment Executive Agency (CINEA). Neither the European Union nor the granting authority can be held responsible for them.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMeta } from '@/composables/use-meta'

useMeta({ title: 'Project Timeline' })

</script>