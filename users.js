<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>PharmaCare Login</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
        tailwind.config = {
            darkMode: "class",
            theme: {
                extend: {
                    "colors": {
                        "secondary": "#2a6b2c",
                        "on-secondary-fixed-variant": "#0c5216",
                        "background": "#f7fbf0",
                        "surface-bright": "#f7fbf0",
                        "on-secondary-container": "#307231",
                        "surface-tint": "#2e7d32",
                        "tertiary": "#923357",
                        "on-tertiary-container": "#ffedf0",
                        "on-surface": "#1a1c19",
                        "outline-variant": "#bfcaba",
                        "error": "#ba1a1a",
                        "outline": "#707a6c",
                        "primary-container": "#2e7d32",
                        "primary-fixed-dim": "#88d982",
                        "inverse-on-surface": "#eef2e8",
                        "tertiary-fixed": "#ffd9e2",
                        "surface-container": "#ebefe5",
                        "surface-container-lowest": "#ffffff",
                        "surface-container-high": "#e5eadf",
                        "on-error": "#ffffff",
                        "on-tertiary-fixed-variant": "#7f2448",
                        "secondary-fixed-dim": "#91d78a",
                        "on-secondary": "#ffffff",
                        "on-primary": "#ffffff",
                        "surface-variant": "#e0e4da",
                        "inverse-surface": "#2d322b",
                        "tertiary-fixed-dim": "#ffb1c7",
                        "on-primary-fixed-variant": "#005312",
                        "surface-container-low": "#f1f5eb",
                        "primary": "#0d631b",
                        "primary-fixed": "#a3f69c",
                        "secondary-container": "#acf4a4",
                        "surface-dim": "#d7dbd2",
                        "surface": "#f7fbf0",
                        "on-tertiary-fixed": "#3f001c",
                        "error-container": "#ffdad6",
                        "on-background": "#181d17",
                        "warning": "#f57c00",
                        "on-primary-fixed": "#002204",
                        "on-surface-variant": "#40493d",
                        "tertiary-container": "#b14b6f",
                        "secondary-fixed": "#acf4a4",
                        "on-error-container": "#93000a",
                        "inverse-primary": "#88d982",
                        "on-secondary-fixed": "#002203",
                        "on-tertiary": "#ffffff",
                        "on-primary-container": "#cbffc2",
                        "surface-container-highest": "#e0e4da"
                    },
                    "borderRadius": {
                        "DEFAULT": "0.25rem",
                        "lg": "0.5rem",
                        "xl": "0.75rem",
                        "full": "9999px"
                    },
                    "spacing": {
                        "sm": "12px",
                        "lg": "40px",
                        "md": "24px",
                        "gutter": "24px",
                        "base": "8px",
                        "container-max": "1200px",
                        "xl": "64px",
                        "xs": "4px"
                    },
                    "fontFamily": {
                        "display-lg": ["Inter"],
                        "headline-lg": ["Inter"],
                        "label-md": ["Inter"],
                        "body-lg": ["Inter"],
                        "headline-md": ["Inter"],
                        "label-sm": ["Inter"],
                        "body-md": ["Inter"],
                        "headline-lg-mobile": ["Inter"],
                        "body-sm": ["Inter"]
                    },
                    "fontSize": {
                        "display-lg": ["48px", {"lineHeight": "56px", "letterSpacing": "-0.02em", "fontWeight": "700"}],
                        "headline-lg": ["32px", {"lineHeight": "40px", "letterSpacing": "-0.01em", "fontWeight": "600"}],
                        "label-md": ["14px", {"lineHeight": "16px", "letterSpacing": "0.05em", "fontWeight": "500"}],
                        "body-lg": ["18px", {"lineHeight": "28px", "fontWeight": "400"}],
                        "headline-md": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "label-sm": ["12px", {"lineHeight": "14px", "fontWeight": "600"}],
                        "body-md": ["16px", {"lineHeight": "24px", "fontWeight": "400"}],
                        "headline-lg-mobile": ["24px", {"lineHeight": "32px", "fontWeight": "600"}],
                        "body-sm": ["14px", {"lineHeight": "20px", "fontWeight": "400"}]
                    }
                }
            }
        }
    </script>
<style>
        body { font-family: 'Inter', sans-serif; }
    </style>
</head>
<body class="bg-surface text-on-surface min-h-screen flex flex-col justify-center items-center p-gutter">
<div class="w-full max-w-md bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 p-lg">
<!-- Header -->
<div class="text-center mb-lg">
<h1 class="font-headline-lg text-headline-lg text-primary mb-xs">PharmaCare</h1>
<p class="font-body-md text-body-md text-on-surface-variant">Secure System Access</p>
</div>
<!-- Role Selection -->
<div class="mb-lg">
<h2 class="font-label-md text-label-md text-on-surface mb-sm">Select Your Role</h2>
<div class="grid grid-cols-2 gap-sm">
<!-- Member -->
<button class="flex flex-col items-center justify-center p-md rounded-lg border-2 border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
<span class="material-symbols-outlined text-outline group-hover:text-primary mb-base" data-icon="person" style="background-color: #e0f2fe; padding: 8px; border-radius: 50%;">person</span>
<span class="font-label-sm text-label-sm text-on-surface group-hover:text-primary">Member</span>
</button>
<!-- Pharmacist -->
<button class="flex flex-col items-center justify-center p-md rounded-lg border-2 border-primary bg-surface-container-low transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent relative">
<div class="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></div>
<span class="material-symbols-outlined text-primary mb-base" data-icon="local_pharmacy" style="background-color: #dcfce7; padding: 8px; border-radius: 50%;">local_pharmacy</span>
<span class="font-label-sm text-label-sm text-primary">Pharmacist</span>
</button>
<!-- Doctor -->
<button class="flex flex-col items-center justify-center p-md rounded-lg border-2 border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
<span class="material-symbols-outlined text-outline group-hover:text-primary mb-base" data-icon="stethoscope" style="background-color: #ccfbf1; padding: 8px; border-radius: 50%;">stethoscope</span>
<span class="font-label-sm text-label-sm text-on-surface group-hover:text-primary">Doctor</span>
</button>
<!-- Service Team -->
<button class="flex flex-col items-center justify-center p-md rounded-lg border-2 border-outline-variant hover:border-primary hover:bg-surface-container-low transition-colors group focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
<span class="material-symbols-outlined text-outline group-hover:text-primary mb-base" data-icon="support_agent" style="background-color: #fef3c7; padding: 8px; border-radius: 50%;">support_agent</span>
<span class="font-label-sm text-label-sm text-on-surface group-hover:text-primary">Service Team</span>
</button>
</div>
</div>
<!-- Input Form -->
<form class="space-y-md">
<div>
<label class="block font-label-sm text-label-sm text-on-surface mb-xs" for="identifier">Email or Mobile Number</label>
<div class="relative">
<div class="absolute inset-y-0 left-0 pl-sm flex items-center pointer-events-none">
<span class="material-symbols-outlined text-outline" data-icon="badge">badge</span>
</div>
<input class="w-full pl-xl pr-sm py-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest font-body-md text-body-md text-on-surface placeholder:text-outline-variant transition-all outline-none" id="identifier" name="identifier" placeholder="e.g., ID-10492 or Name" type="text"/>
</div>
</div>
<!-- OTP Section (Simulated) -->
<div>
<label class="block font-label-sm text-label-sm text-on-surface mb-xs">Verification Code (OTP)</label>
<div class="flex gap-sm justify-between">
<input class="w-12 h-14 text-center rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest font-headline-md text-headline-md text-on-surface outline-none transition-all" maxlength="1" type="text" value="4"/>
<input class="w-12 h-14 text-center rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest font-headline-md text-headline-md text-on-surface outline-none transition-all" maxlength="1" type="text" value="9"/>
<input class="w-12 h-14 text-center rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest font-headline-md text-headline-md text-on-surface outline-none transition-all" maxlength="1" placeholder="·" type="text"/>
<input class="w-12 h-14 text-center rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest font-headline-md text-headline-md text-on-surface outline-none transition-all" maxlength="1" placeholder="·" type="text"/>
<input class="w-12 h-14 text-center rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest font-headline-md text-headline-md text-on-surface outline-none transition-all" maxlength="1" placeholder="·" type="text"/>
<input class="w-12 h-14 text-center rounded-lg border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/20 bg-surface-container-lowest font-headline-md text-headline-md text-on-surface outline-none transition-all" maxlength="1" placeholder="·" type="text"/>
</div>
<div class="mt-xs text-right">
<button class="font-label-sm text-label-sm text-primary hover:text-primary-container transition-colors focus:outline-none" type="button">Resend Code</button>
</div>
</div>
<!-- Actions -->
<div class="pt-sm space-y-sm">
<button class="w-full bg-primary hover:bg-on-secondary-container text-on-primary font-label-md text-label-md py-sm rounded-lg shadow-[0_2px_4px_rgba(46,125,50,0.1)] transition-all flex items-center justify-center gap-xs focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" type="submit">
<span class="material-symbols-outlined" data-icon="lock_open">lock_open</span>
                    Verify &amp; Secure Login
                </button>
<button class="w-full bg-surface-container-lowest border border-outline-variant hover:bg-surface-container-low text-on-surface font-label-md text-label-md py-sm rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-primary" type="button">
                    Need Clinical Support?
                </button>
</div>
</form>
<!-- Trust Indicators -->
<div class="mt-lg pt-md border-t border-outline-variant/30 flex justify-center items-center gap-md text-outline">
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]" data-icon="verified_user">verified_user</span>
<span class="font-body-sm text-body-sm text-[10px]">HIPAA Compliant</span>
</div>
<div class="flex items-center gap-xs">
<span class="material-symbols-outlined text-[16px]" data-icon="health_and_safety">health_and_safety</span>
<span class="font-body-sm text-body-sm text-[10px]">Encrypted Data</span>
</div>
</div>
</div>
</body></html>
