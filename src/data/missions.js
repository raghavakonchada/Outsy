export const ACTIVITY_CATEGORIES = [
  {
    id: 'connect',
    name: 'Connect',
    tagline: 'Start friendly conversations.',
    description: 'Break out of digital isolation with warm, low-pressure micro-interactions with real people in your neighborhood and campus community.',
    color: '#2d5a3f',
    accentBg: '#f2f6f3',
    numeral: '01',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=900&q=80',
    alt: 'Sunlight filtering through trees along a quiet community path',
  },
  {
    id: 'discover',
    name: 'Discover',
    tagline: 'Explore insects and the natural world.',
    description: 'Look closer at the micro-wilderness right on your street and campus—from fascinating ants to wild moss and changing trees.',
    color: '#264e36',
    accentBg: '#eef4f0',
    numeral: '02',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=900&q=80',
    alt: 'Detailed view of fern leaves and forest flora in natural light',
  },
  {
    id: 'feel',
    name: 'Feel',
    tagline: 'Experience nature mindfully.',
    description: 'Engage all your senses to soothe digital fatigue—feel sunlight, hear breezes, and ground yourself in physical reality.',
    color: '#2a555f',
    accentBg: '#eef5f7',
    numeral: '03',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80',
    alt: 'Misty evergreen forest and valley in morning light',
  },
  {
    id: 'care',
    name: 'Care',
    tagline: 'Help animals responsibly.',
    description: 'Show kindness to the creatures sharing our living spaces through safe, supervised, non-contact stewardship and habitat care.',
    color: '#8c5928',
    accentBg: '#faf3ec',
    numeral: '04',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80',
    alt: 'Quiet mossy forest glade and gentle woodland brook',
  },
  {
    id: 'recharge',
    name: 'Recharge',
    tagline: 'Take refreshing study and work breaks.',
    description: 'Give your tired eyes and screen-taxed nervous system a genuine reset that doomscrolling can never provide.',
    color: '#3d5648',
    accentBg: '#f0f5f2',
    numeral: '05',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80',
    alt: 'Expansive mountain ridge under soft daylight with pine canopy',
  },
];

/**
 * Modular Mission Dataset
 * Comprehensive, safe, college-friendly outdoor missions covering Connect, Discover, Feel, Care, and Recharge.
 * Every mission includes title, description, category, estimated duration, difficulty, instructions, and safety note.
 * All animal-care missions strictly enforce responsible, non-contact, supervised stewardship.
 */
export const PREDEFINED_MISSIONS = [
  // ---------------------------------------------------------------------------
  // 1. CONNECT (Social Wellness & Community Micro-Interactions)
  // ---------------------------------------------------------------------------
  {
    id: 1,
    category: 'connect',
    categoryName: 'Connect',
    title: 'The Campus Quad Greeting',
    description: 'Take an unhurried walking loop around your campus quad, residential courtyard, or neighborhood green. Offer a genuine smile and friendly greeting to two people you cross paths with.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Friendly',
    instructions: [
      'Unplug your headphones, slip your phone into a pocket, and walk at an unhurried, receptive pace.',
      'Make warm eye contact with someone passing on the pathway (a fellow student, campus staff member, or neighbor).',
      'Offer a simple, natural "Good morning" or "Have a great day" and notice the immediate shared lift in mood.'
    ],
    safetyNote: 'Stay on well-lit, open public campus paths. Always respect personal boundaries and let people pass comfortably if they are in a rush or wearing headphones.',
    tip: 'Micro-interactions remind us that we are members of a living physical community, instantly relieving solitary screen fatigue.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sun-dappled neighborhood park pathway with walkers in conversation',
    tags: ['social', 'campus', 'micro-interaction', 'friendly']
  },
  {
    id: 2,
    category: 'connect',
    categoryName: 'Connect',
    title: 'Campus Garden & Groundskeeper Chat',
    description: 'Find a landscaped flower bed, community garden, or courtyard planter and share a sincere compliment or quick question with whoever is tending the green space.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Observant',
    instructions: [
      'Walk to an outdoor campus garden, greenhouse exterior, or residence hall flower bed.',
      'If you see a groundskeeper or resident gardening, pause safely at the edge of the paved path.',
      'Offer a warm compliment such as "The flowers look lovely this week" or ask which seasonal plants are blooming.'
    ],
    safetyNote: 'Maintain a safe distance from moving mowers, hedge trimmers, or power equipment. Only start a conversation when the person is stationary and working safely.',
    tip: 'Campus gardeners hold deep knowledge about local soil and changing seasons that most people walk past without noticing.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Dew droplets on fresh garden leaves and flowers',
    tags: ['garden', 'conversation', 'appreciation', 'campus']
  },
  {
    id: 3,
    category: 'connect',
    categoryName: 'Connect',
    title: 'Study Break Walk with a Peer',
    description: 'Invite a study partner, roommate, or classmate to take one phoneless outdoor loop around the building before resuming coursework.',
    duration: '12 mins',
    durationMinutes: 12,
    difficulty: 'Social',
    instructions: [
      'Invite a study partner or dorm neighbor: "Want to take a quick 10-minute fresh air loop around the quad?"',
      'Leave phones zipped away inside backpacks or pockets for the entire duration of the walk.',
      'Walk side-by-side, talk about anything other than the screen assignment, and let your eyes rest on the trees.'
    ],
    safetyNote: 'Stick to established campus pedestrian thoroughfares and always cross campus roads at marked pedestrian crosswalks.',
    tip: 'Walking side-by-side encourages candid, relaxed conversation without the pressure of constant direct eye contact.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Peaceful walking trail through natural greenery',
    tags: ['study-break', 'peers', 'walking', 'phoneless']
  },
  {
    id: 4,
    category: 'connect',
    categoryName: 'Connect',
    title: 'Physical Board Encouragement',
    description: 'Write a brief, positive note of encouragement on paper and post it on a designated outdoor campus bulletin board or public library kiosk.',
    duration: '8 mins',
    durationMinutes: 8,
    difficulty: 'Gentle',
    instructions: [
      'Write an uplifting, positive phrase (e.g. "Take a deep breath outside today", "You have got this exam week") on a small note card.',
      'Walk out to a designated campus outdoor bulletin board or kiosk where student clubs post flyers.',
      'Neatly pin or tape the note where a tired student might spot it while passing between classes.'
    ],
    safetyNote: 'Post exclusively on permitted public community bulletin boards. Never affix notes to living tree bark, sculptures, or private property.',
    tip: 'Physical, tactile messages create spontaneous delight in an era where nearly all encouragement is digital.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sun shining through woodland leaves and branches',
    tags: ['encouragement', 'kindness', 'tactile', 'campus']
  },
  {
    id: 5,
    category: 'connect',
    categoryName: 'Connect',
    title: 'Outdoor Club & Outing Scout',
    description: 'Walk past outdoor student kiosks, recreation boards, or courtyard pillars to find one physical flier for an upcoming outdoor trip, hiking group, or clean-up day.',
    duration: '15 mins',
    durationMinutes: 15,
    difficulty: 'Active',
    instructions: [
      'Stroll across campus specifically scanning physical posters and bulletin boards on outdoor kiosks.',
      'Look for outings organized by student outdoors clubs, trail maintenance groups, or intramural teams.',
      'Note down the date and meeting location for one upcoming activity that gets you into nature.'
    ],
    safetyNote: 'Read flyers while standing stationary on the sidewalk; do not read while stepping off curbs or crossing cycle paths.',
    tip: 'College outing clubs frequently provide low-cost trips, transportation, and free gear rentals for students.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Group walking in a green natural park setting',
    tags: ['clubs', 'exploration', 'campus', 'active']
  },
  {
    id: 6,
    category: 'connect',
    categoryName: 'Connect',
    title: 'Courtyard Bench Wave & Nod',
    description: 'Step onto your residence hall patio, porch, or courtyard bench. Take five relaxed minutes to observe community flow and offer a friendly wave to a passerby.',
    duration: '5 mins',
    durationMinutes: 5,
    difficulty: 'Gentle',
    instructions: [
      'Find an open seat on a campus patio bench or residential courtyard steps.',
      'Sit with an open, receptive posture, resting your hands in your lap rather than gripping a phone.',
      'Offer a warm, relaxed nod or wave to someone passing along the walkway.'
    ],
    safetyNote: 'Choose familiar, comfortable outdoor seating within open student residential areas.',
    tip: 'Even silent, friendly body language sends safety signals to your own nervous system, reducing chronic vigilance.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Peaceful open courtyard bench in natural light',
    tags: ['quick', 'micro-connection', 'relaxing', 'courtyard']
  },

  // ---------------------------------------------------------------------------
  // 2. FEEL (Sensory Grounding & Somatic Mindfulness)
  // ---------------------------------------------------------------------------
  {
    id: 7,
    category: 'feel',
    categoryName: 'Feel',
    title: 'The 5-Sense Grounding Walk',
    description: 'Step outside to the nearest campus tree or garden patch. Pause for 30 seconds, then identify 3 distinct sounds, 2 outdoor scents, and 1 natural texture.',
    duration: '7 mins',
    durationMinutes: 7,
    difficulty: 'Gentle',
    instructions: [
      'Stop near a tree, courtyard planter, or grass patch and close your eyes for 30 seconds.',
      'Name 3 distinct outdoor sounds (breeze in leaves, bird chirps, distant footsteps), then 2 scents (wet soil, pine needles).',
      'Open your eyes and gently feel 1 natural texture (rough tree bark, smooth river pebble, or a blade of grass).'
    ],
    safetyNote: 'Step safely off bike paths and skateboard routes before closing your eyes or slowing your pace.',
    tip: 'Engaging multiple physical senses breaks the hyper-focused tunnel vision caused by hours of computer screen work.',
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1000&q=80',
    alt: 'Misty pine forest in tranquil morning daylight',
    tags: ['sensory', 'grounding', 'mindful', 'calm']
  },
  {
    id: 8,
    category: 'feel',
    categoryName: 'Feel',
    title: 'The 10-Breath Cloud Drift',
    description: 'Find a spot on the campus lawn or an outdoor bench with an unobstructed view of the open sky. Pick a single cloud and follow its shifts over 10 slow breaths.',
    duration: '8 mins',
    durationMinutes: 8,
    difficulty: 'Mindful',
    instructions: [
      'Lie back on the quad grass or lean back on a bench and look up toward the open sky.',
      'Select a single cloud shape and watch how its delicate edges soften and drift in high winds.',
      'Inhale deeply through your nose for 4 counts, pause for 2, and exhale for 6 counts, repeating 10 times.'
    ],
    safetyNote: 'Never look directly at the sun. Wear sunglasses or find high tree shade if the midday sun is intense.',
    tip: 'Expanding your visual field to the open atmosphere directly lowers resting heart rate and cognitive arousal.',
    image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=1000&q=80',
    alt: 'Soft white clouds drifting across deep blue atmosphere',
    tags: ['clouds', 'breathwork', 'open-sky', 'mindful']
  },
  {
    id: 9,
    category: 'feel',
    categoryName: 'Feel',
    title: 'Sunbeam Soak & Wind Touch',
    description: 'Locate a patch of sunlight on an outdoor bench or steps. Close your eyes and feel the thermal warmth on your forehead and hands, paired with the moving air.',
    duration: '6 mins',
    durationMinutes: 6,
    difficulty: 'Grounding',
    instructions: [
      'Find a bench or stone step warmed by direct or dappled sunlight.',
      'Turn your face gently toward the light with closed eyes and roll your shoulders back.',
      'Notice the tactile contrast between radiant solar warmth and any cool breeze skimming across your hands.'
    ],
    safetyNote: 'Limit direct midday sun exposure to 5-10 minutes and apply sunscreen if remaining outdoors longer.',
    tip: 'Natural sunlight on the face helps regulate daytime cortisol levels and tunes your circadian rhythm.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Golden sun rays over open natural landscape',
    tags: ['sunlight', 'warmth', 'circadian', 'quick']
  },
  {
    id: 10,
    category: 'feel',
    categoryName: 'Feel',
    title: 'Somatic Soil & Grass Reset',
    description: 'Sit comfortably on a clean campus lawn. Feel the solid mass of the earth supporting your body and notice the ambient temperature of the ground.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Restful',
    instructions: [
      'Find a dry, clean patch of grass in the quad or campus park.',
      'Sit upright or lie back with your palms resting flat against the grass blades.',
      'Focus your attention on the feeling of solid, immovable ground beneath you for 5 full minutes.'
    ],
    safetyNote: 'Inspect the grass first for wet mud, bee clover patches, or automatic sprinkler heads before sitting down.',
    tip: 'The sensation of being physically supported by the earth relieves postural tension stored in the lower back from desk chairs.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Lush green grass and tree shadows on sunlit ground',
    tags: ['earth', 'grounding', 'posture', 'rest']
  },
  {
    id: 11,
    category: 'feel',
    categoryName: 'Feel',
    title: 'Temperature Gradient Walk',
    description: 'Walk slowly between an open sunny pathway and a deep tree canopy shade, mindfully registering the rapid temperature shift on your skin.',
    duration: '5 mins',
    durationMinutes: 5,
    difficulty: 'Observant',
    instructions: [
      'Identify a campus walkway that transitions from direct sunlight into dense tree canopy shade.',
      'Walk at a steady, conscious pace through the sunny zone, noticing warmth on your arms and shoulders.',
      'Cross into the canopy shadow and consciously register the crisp drop in temperature and air moisture.'
    ],
    safetyNote: 'Watch for uneven tree roots or cobblestones when transitioning between bright sunlight and dark shade.',
    tip: 'Conscious temperature awareness trains interoception—the nervous system\'s ability to perceive physical reality.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Dappled sunlight passing through forest canopy',
    tags: ['temperature', 'sensory', 'quick', 'canopy']
  },
  {
    id: 12,
    category: 'feel',
    categoryName: 'Feel',
    title: 'Raindrop & Petrichor Inhale',
    description: 'During or right after rain, step under a covered campus portico, library archway, or gazebo to breathe in the fresh aroma of wet stone and soil (petrichor).',
    duration: '6 mins',
    durationMinutes: 6,
    difficulty: 'Mindful',
    instructions: [
      'Stand safely under a covered campus awning or portico during light rain or right after a shower.',
      'Close your eyes and take 5 slow, deep breaths through your nose, inhaling the petrichor fragrance.',
      'Listen to the steady rhythmic cadence of droplets hitting tree leaves and stone gutters.'
    ],
    safetyNote: 'Remain on dry, non-slip covered walkways; head indoors immediately if thunder or lightning is present.',
    tip: 'The scent of petrichor is produced by geosmin, a natural soil compound proven to induce calm in the human nervous system.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80',
    alt: 'Rain droplets on fresh woodland flora and leaves',
    tags: ['rain', 'petrichor', 'scent', 'weather']
  },

  // ---------------------------------------------------------------------------
  // 3. DISCOVER (Micro-Curiosity & Natural World Exploration)
  // ---------------------------------------------------------------------------
  {
    id: 13,
    category: 'discover',
    categoryName: 'Discover',
    title: 'Micro-Safari: Leaf & Bark Explorer',
    description: 'Inspect the bark of a mature tree, the underside of shrub leaves, or a garden bed edge to spot 3 tiny creeping critters navigating their miniature world.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Observant',
    instructions: [
      'Choose a mature tree or ornamental bush along a quiet campus path.',
      'Lean in close to inspect the trunk crevices or leaf undersides without shaking or breaking branches.',
      'Quietly observe at least 3 small creatures (ants, ladybugs, inchworms, or tiny spiders) going about their intricate daily work.'
    ],
    safetyNote: 'Observe with your eyes only. Never touch stinging insects, wasps, or fuzzy caterpillars, and leave all plant stems undamaged.',
    tip: 'Shifting your focus from macro-stress to microscopic nature triggers wonder and recalibrates perspective.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    alt: 'Close-up macro of fern fronds and mossy forest floor',
    tags: ['insects', 'micro-safari', 'curiosity', 'nature']
  },
  {
    id: 14,
    category: 'discover',
    categoryName: 'Discover',
    title: 'Botanical Texture Detective',
    description: 'Locate three distinct plant species on campus grounds. Gently feel their foliage to compare textures: waxy, fuzzy, serrated, or cool.',
    duration: '8 mins',
    durationMinutes: 8,
    difficulty: 'Curious',
    instructions: [
      'Walk along a campus landscaped path or shrub border.',
      'Carefully touch the surface of a leaf from three different species (e.g. evergreen needle, broadleaf maple, velvety sage).',
      'Notice the structural adaptations: waxy coatings preserve water, while fine hairs protect against drying wind.'
    ],
    safetyNote: 'Know and steer clear of poison ivy, poison oak, or thorny brambles. Wash your hands thoroughly after handling outdoor plants.',
    tip: 'Tactile outdoor exploration stimulates sensory receptors in fingertips that are dulled by endless phone swiping.',
    image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Rich green leaves and woodland flora with sunlight',
    tags: ['plants', 'botany', 'tactile', 'campus']
  },
  {
    id: 15,
    category: 'discover',
    categoryName: 'Discover',
    title: 'Birdsong Listening Post',
    description: 'Stand in silence near a leafy campus grove or courtyard tree. Close your eyes and count how many distinct bird calls or song patterns you can isolate.',
    duration: '7 mins',
    durationMinutes: 7,
    difficulty: 'Observant',
    instructions: [
      'Position yourself near a cluster of campus trees away from vehicular roads and bus loops.',
      'Stand or sit quietly and focus solely on your auditory field for 4 minutes.',
      'Count the different pitches, trills, and rhythms of local birds communicating across the canopy.'
    ],
    safetyNote: 'Stand safely off bicycle routes and maintain spatial awareness of your surroundings while listening.',
    tip: 'Birdsong frequency patterns signal environmental safety to the human brain, naturally calming vigilance.',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1000&q=80',
    alt: 'Songbird perched on a green branch in soft morning light',
    tags: ['birdsong', 'listening', 'auditory', 'grove']
  },
  {
    id: 16,
    category: 'discover',
    categoryName: 'Discover',
    title: 'Campus Geological Survey',
    description: 'Examine campus stone facades, granite steps, or slate pathways to discover mineral veins, natural fossil textures, or crustose lichen rings.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Observant',
    instructions: [
      'Inspect an older stone building foundation, outdoor steps, or natural rock retaining wall.',
      'Look closely for quartz veins, speckled feldspar, sedimentary layers, or colorful circular lichen patches.',
      'Consider the thousands of years of geological formation embedded in everyday construction materials.'
    ],
    safetyNote: 'Stay on public ground level; never climb retaining walls or scramble on architectural stonework.',
    tip: 'Lichen is a symbiotic organism of algae and fungus that only thrives in areas with relatively clean ambient air.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80',
    alt: 'Natural stone and moss-covered rock in forest',
    tags: ['geology', 'stone', 'lichen', 'campus']
  },
  {
    id: 17,
    category: 'discover',
    categoryName: 'Discover',
    title: 'Shadow & Earth Rotation Tracker',
    description: 'Pick a campus statue, sundial, or prominent tree branch shadow cast on a pathway. Mark its tip mentally or with a small pebble and watch it move over 5 minutes.',
    duration: '5 mins',
    durationMinutes: 5,
    difficulty: 'Curious',
    instructions: [
      'Find a sharp shadow cast across a flat sidewalk or stone courtyard.',
      'Place a small pebble or fallen twig exactly at the sharpest edge of the shadow tip.',
      'Watch intently for 3-5 minutes as the Earth rotation steadily shifts the shadow past your marker.'
    ],
    safetyNote: 'Place marker twigs in a spot where pedestrians will not slip or trip over them.',
    tip: 'Observing planetary motion in real time grounds your daily deadlines in a vast cosmic timescale.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sun casting long tree shadows on mountain ridge',
    tags: ['shadow', 'astronomy', 'time', 'quick']
  },
  {
    id: 18,
    category: 'discover',
    categoryName: 'Discover',
    title: 'Wild Flora in Concrete Seams',
    description: 'Search along paved walkways, courtyard brick seams, or curb edges to find resilient wild plants flourishing without human maintenance.',
    duration: '8 mins',
    durationMinutes: 8,
    difficulty: 'Observant',
    instructions: [
      'Walk along a campus walkway looking down at expansion joints and brick seams.',
      'Identify at least two wild plants (such as dandelions, plantain weed, or green moss) thriving in minimal soil.',
      'Notice how root systems exploit minuscule cracks, displaying tenacity in urban environments.'
    ],
    safetyNote: 'Stay on sidewalks and pedestrian plazas; never step into active road lanes or traffic shoulders.',
    tip: 'These urban pioneer plants create initial soil pockets that allow other micro-life to colonize concrete landscapes.',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1000&q=80',
    alt: 'Green moss and micro flora growing in stone seams',
    tags: ['urban-nature', 'resilience', 'botany', 'sidewalk']
  },

  // ---------------------------------------------------------------------------
  // 4. CARE (Responsible, Supervised Stewardship & Animal Welfare)
  // ---------------------------------------------------------------------------
  {
    id: 19,
    category: 'care',
    categoryName: 'Care',
    title: 'Hydration Oasis for Garden Pollinators',
    description: 'Set out a clean shallow dish with fresh water and clean pebbles on an outdoor patio table or garden ledge so bees and small birds can drink safely without drowning.',
    duration: '5 mins',
    durationMinutes: 5,
    difficulty: 'Gentle',
    instructions: [
      'Take a shallow saucer, jar lid, or small dish and add a few clean, smooth pebbles or a floating wood chip.',
      'Pour a shallow layer of clean water (pebbles provide safe footholds so visiting bees and small birds cannot fall in).',
      'Set it safely on a sunny patio ledge or garden stone where local pollinators frequent.'
    ],
    safetyNote: 'Never approach or touch bees while they drink. Place the dish away from high-traffic doorways and refresh or dump standing water within 24 hours to prevent mosquito breeding.',
    tip: 'Urban bees and birds often fly long distances without finding clean water; a tiny dish provides crucial hydration.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Quiet woodland stream and mossy forest glade',
    tags: ['pollinators', 'water', 'bees', 'stewardship']
  },
  {
    id: 20,
    category: 'care',
    categoryName: 'Care',
    title: 'Campus Canopy Bird Survey',
    description: 'Observe wild birds foraging on campus lawns or in high tree canopies from a respectful, non-intrusive distance of at least 20 feet.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Observant',
    instructions: [
      'Sit quietly on a campus bench near grass or trees without making abrupt movements.',
      'Scan tree branches or open lawns for robins, sparrows, or finches searching for seeds and insects.',
      'Observe their foraging posture, flight patterns, and plumage from a comfortable distance.'
    ],
    safetyNote: 'Maintain at least 20 feet of distance at all times. Never feed bread, crackers, or human snacks to wild birds, and never approach nesting sites or grounded fledglings.',
    tip: 'Feeding wild birds human bread harms their digestion; observing their natural foraging behaviors is the most respectful care.',
    image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?auto=format&fit=crop&w=1000&q=80',
    alt: 'Wild bird foraging peacefully on branch',
    tags: ['birds', 'observation', 'respect', 'distance']
  },
  {
    id: 21,
    category: 'care',
    categoryName: 'Care',
    title: 'Campus Companion Pet Etiquette',
    description: 'Practice responsible companion animal etiquette when a fellow student or neighbor is walking a leashed pet dog on campus greens.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Gentle',
    instructions: [
      'Observe the dog and guardian from a safe distance of several paces.',
      'If the owner appears unhurried and the dog is calm, ask clearly from a distance: "May I say hello to your dog?"',
      'If the owner approves, approach gently and let the dog sniff your closed hand; if they decline, smile and give them space.'
    ],
    safetyNote: 'Always ask the owner first and wait for explicit verbal permission. Never approach off-leash, unattended, tied-up, or barking animals, and never touch stray or wild animals.',
    tip: 'Respecting an animal\'s boundaries and an owner\'s guidance is the foundation of compassionate companionship.',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Friendly companion dog walking on green grass with owner',
    tags: ['pets', 'etiquette', 'permission', 'respect']
  },
  {
    id: 22,
    category: 'care',
    categoryName: 'Care',
    title: 'Wildlife-Safe Campus Litter Pickup',
    description: 'Safely collect 3 pieces of discarded plastic or packaging that present entanglement or ingestion hazards to urban squirrels and birds.',
    duration: '8 mins',
    durationMinutes: 8,
    difficulty: 'Active',
    instructions: [
      'Use a paper napkin, paper bag, or gardening glove to handle debris safely.',
      'Scan the lawn perimeter or hedgerow for discarded plastic snack wrappers, bottle caps, or six-pack plastic rings.',
      'Cut any closed plastic loops if possible, then deposit everything into the nearest campus recycling or trash bin.'
    ],
    safetyNote: 'Only pick up dry, safe plastics or paper. Never touch broken glass, metal shards, needles, medical waste, or animal droppings. Wash or sanitize hands thoroughly immediately afterward.',
    tip: 'Small pieces of plastic packaging are the leading cause of urban animal entanglement and accidental ingestion.',
    image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=80',
    alt: 'Clean, pristine woodland forest trail free of litter',
    tags: ['litter', 'cleanup', 'wildlife-safety', 'stewardship']
  },
  {
    id: 23,
    category: 'care',
    categoryName: 'Care',
    title: 'Dorm Window Bird-Safety Inspection',
    description: 'Check your residence hall or study building windows from outside to identify reflections that could cause bird collisions.',
    duration: '5 mins',
    durationMinutes: 5,
    difficulty: 'Gentle',
    instructions: [
      'Step outside to view the ground-floor or lower-level windows of your residence hall or library.',
      'Notice if the glass creates a mirror reflection of nearby tree canopies or open sky.',
      'When back inside, angle blinds downward or place a paper note/decal on the glass to break up deceptive reflections.'
    ],
    safetyNote: 'Stay safely on pedestrian sidewalks. Never climb railings, ledges, or window wells to inspect glass.',
    tip: 'Up to a billion birds collide with glass windows annually in North America; small interior decals save lives.',
    image: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1000&q=80',
    alt: 'Green foliage outside building window in soft daylight',
    tags: ['birds', 'windows', 'prevention', 'campus']
  },
  {
    id: 24,
    category: 'care',
    categoryName: 'Care',
    title: 'Local Wildlife Rescue & Shelter Awareness',
    description: 'Use an outdoor study break to research your local certified animal rescue or wildlife rehabilitation organization and their protocols.',
    duration: '15 mins',
    durationMinutes: 15,
    difficulty: 'Observant',
    instructions: [
      'Walk to an outdoor campus courtyard or patio bench with fresh air.',
      'Check your town or county directory for the nearest registered wildlife rehabilitation center and humane society.',
      'Note their official phone number so you know who to contact if you ever encounter injured wildlife on campus.'
    ],
    safetyNote: 'Never attempt to handle, capture, or nurse injured or sick wildlife yourself. Always call certified wildlife rehabilitators or campus animal control.',
    tip: 'Knowing licensed rescue contact details ensures that injured wildlife receives professional veterinary care.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sunlit woodland trail leading to natural sanctuary',
    tags: ['shelter', 'rescue', 'wildlife-care', 'resource']
  },

  // ---------------------------------------------------------------------------
  // 5. RECHARGE (Screen-Free Study Resets & Nervous System Restoration)
  // ---------------------------------------------------------------------------
  {
    id: 25,
    category: 'recharge',
    categoryName: 'Recharge',
    title: 'Canopy Gaze & Horizon Reset',
    description: 'Step out of your study space and gaze at the furthest visible natural point—a tall tree line, campus tower, or cloud ridge—for 5 minutes.',
    duration: '6 mins',
    durationMinutes: 6,
    difficulty: 'Restful',
    instructions: [
      'Walk to the highest point or open edge of your campus quad or library terrace.',
      'Soften your visual focus and rest your eyes on the distant tree line or cloud horizon.',
      'Maintain soft panoramic gaze without squinting, letting your peripheral vision widen naturally.'
    ],
    safetyNote: 'Choose a secure terrace or ground-level viewpoint. Avoid leaning over high railings or ledges.',
    tip: 'Looking at objects beyond 20 feet completely relaxes ciliary eye muscles, counteracting hours of near-screen convergence.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    alt: 'Expansive mountain skyline and distant horizon',
    tags: ['eyes', '20-20-20', 'horizon', 'screen-break']
  },
  {
    id: 26,
    category: 'recharge',
    categoryName: 'Recharge',
    title: 'The Phoneless Perimeter Loop',
    description: 'Leave your phone locked inside your dorm or desk. Walk one full loop around your residence hall perimeter or campus green with completely empty hands.',
    duration: '12 mins',
    durationMinutes: 12,
    difficulty: 'Refreshing',
    instructions: [
      'Place your phone safely in your desk drawer or room before heading outside.',
      'Walk out the door with empty hands, feeling the physical freedom of zero notifications.',
      'Walk one full perimeter loop around the building or quad at a relaxed, unhurried pace.'
    ],
    safetyNote: 'Ensure your dorm room key or campus card is securely in your pocket, and stick to well-trafficked campus paths.',
    tip: 'Even leaving your phone in your pocket drains subconscious attention; true disconnection occurs when it is physically absent.',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Peaceful walking path through natural campus greenery',
    tags: ['phoneless', 'walking', 'reset', 'campus']
  },
  {
    id: 27,
    category: 'recharge',
    categoryName: 'Recharge',
    title: 'Tree Bark Trunk Rest',
    description: 'Lean your back or shoulder firmly against a mature campus tree trunk for 5 uninterrupted minutes, feeling its solid stillness.',
    duration: '7 mins',
    durationMinutes: 7,
    difficulty: 'Grounding',
    instructions: [
      'Find a sturdy, mature oak, pine, or maple tree on the campus lawn.',
      'Lean your back or shoulder against the trunk and let the wood support your weight.',
      'Close your eyes or gaze into the canopy branches, taking slow, unhurried breaths.'
    ],
    safetyNote: 'Inspect the base of the trunk for ant hills, thorny vines, or damp mud before leaning back.',
    tip: 'Leaning against an immovable living tree gives your postural spine a restorative, grounded resting point.',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Ancient tree roots and trunk in sunlit forest',
    tags: ['tree', 'posture', 'stillness', 'calm']
  },
  {
    id: 28,
    category: 'recharge',
    categoryName: 'Recharge',
    title: 'Brisk Quad Power Stride',
    description: 'Counteract post-lecture lethargy with a brisk 10-minute power walk around campus pedestrian pathways, pumping your arms and deepening your breath.',
    duration: '10 mins',
    durationMinutes: 10,
    difficulty: 'Active',
    instructions: [
      'Step outside immediately after a study session or long lecture block.',
      'Walk at a brisk, energetic pace around campus walkways with upright posture and swung arms.',
      'Focus on pushing off through your toes and taking deep, full breaths of outdoor air.'
    ],
    safetyNote: 'Be mindful of bicycles, skateboards, and campus shuttle crossings while striding briskly.',
    tip: 'Ten minutes of brisk walking increases cerebral blood flow, flushing out adenosine and restoring mental alertness.',
    image: 'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sun-dappled pathway through green campus trees',
    tags: ['energy', 'brisk-walk', 'circulation', 'active']
  },
  {
    id: 29,
    category: 'recharge',
    categoryName: 'Recharge',
    title: 'Outdoor Hydration & Posture Reset',
    description: 'Take a full reusable water bottle outside to a campus courtyard bench. Drink in slow, mindful sips while doing 5 gentle shoulder rolls.',
    duration: '5 mins',
    durationMinutes: 5,
    difficulty: 'Gentle',
    instructions: [
      'Fill your water bottle and step outdoors into fresh air.',
      'Sit on an outdoor bench, roll your shoulders backward 5 times, and gently release neck tension.',
      'Drink half your bottle in slow, deliberate sips, savoring the cool hydration outdoors.'
    ],
    safetyNote: 'Stay seated comfortably; do not stretch your neck past comfortable flexibility.',
    tip: 'Dehydration amplifies screen fatigue; combining fresh air with hydration provides an immediate cognitive reboot.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1000&q=80',
    alt: 'Fresh clear water droplets on leaves in sunlight',
    tags: ['hydration', 'posture', 'quick', 'wellness']
  },
  {
    id: 30,
    category: 'recharge',
    categoryName: 'Recharge',
    title: 'Dusk Golden Hour Transition',
    description: 'Step outdoors during golden hour or twilight to create a clear, physical boundary between daytime classes and evening relaxation.',
    duration: '15 mins',
    durationMinutes: 15,
    difficulty: 'Restful',
    instructions: [
      'Schedule your break for sunset or early dusk when the outdoor light shifts to warm tones.',
      'Stroll along a west-facing campus path or sit on steps facing the open sky.',
      'Watch the light soften over campus rooftops, consciously letting go of daytime academic stress.'
    ],
    safetyNote: 'If walking around dusk, choose well-lit main campus thoroughfares.',
    tip: 'Experiencing the natural dusk transition signals your brain\'s pineal gland to initiate evening recovery rhythms.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Golden sunset light over trees and sky',
    tags: ['dusk', 'sunset', 'circadian', 'transition']
  }
];

export const MISSION_DATASET = PREDEFINED_MISSIONS;
