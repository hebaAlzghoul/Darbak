/**
 * Darbak Jordan (دربك الأردن) - Pure Vanilla JavaScript
 * Zero external frameworks or libraries required.
 */

// Global Data
const PLACES = [
  {
    id: 'petra',
    name: 'The Rose City of Petra',
    nameAr: 'مدينة البتراء الوردية',
    category: 'history',
    subCategory: 'Wonder',
    rating: 5.0,
    reviews: 3840,
    desc: 'Carved into sandstone canyons, Jordan’s crowning jewel awaits your discovery.',
    descAr: 'منحوتة في صخور جبلية وردية، درة تاج الأردن تنتظر استكشافك.',
    longDesc: 'Petra is a world wonder archaeological site dating to around 300 B.C. Carved into pink sandstone cliffs by the Nabataean Kingdom, it features the Treasury, the Monastery, and spectacular mountain trails.',
    image: 'assets/petra 2.jpg',
    location: 'Ma’an Governorate, South Jordan',
    locationAr: 'محافظة معان، جنوب الأردن',
    coordinates: { x: 57, y: 72 },
    type: 'ancient',
    season: 'Spring (March–May) & Autumn (Sept–Nov)',
    advice: [
      'Buy water in advance before entering the Siq',
      'Wear sturdy walking boots (12–18 km walking)',
      'Wear a sun cap and high-SPF sunscreen',
      'Start early (6:30 AM) to experience the Treasury without crowds'
    ],
    duration: 'Full Day (6-8 hours)'
  },
  {
    id: 'wadi-rum',
    name: 'Wadi Rum Valley',
    nameAr: 'وادي رم - وادي القمر',
    category: 'adventure',
    subCategory: 'Desert',
    rating: 4.9,
    reviews: 2950,
    desc: 'A Martian wilderness of dramatic monolithic rock formations and star-filled skies.',
    descAr: 'صحراء مهيبة بتكوينات صخرية فريدة وواحدة من أصفى سماء النجوم في العالم.',
    longDesc: 'The Valley of the Moon is a protected desert wilderness featuring massive sandstone mountains, ancient petroglyphs, red dunes, and traditional Bedouin hospitality.',
    image: 'assets/wadi_rum.jpg',
    location: 'Southern Jordan Desert',
    locationAr: 'صحراء جنوب الأردن',
    coordinates: { x: 54, y: 84 },
    type: 'adventure',
    season: 'Autumn (October–November) & Spring',
    advice: [
      'Bring warm layered fleece for cold desert nights',
      'Wear polarized sunglasses and Bedouin Shmagh',
      'Carry portable battery packs (limited camp electricity)',
      'Reserve a 4x4 sunset desert safari'
    ],
    duration: 'Overnight / 2 Days'
  },
  {
    id: 'dead-sea',
    name: 'The Dead Sea',
    nameAr: 'البحر الميت',
    category: 'relaxation',
    subCategory: 'Wellness',
    rating: 4.9,
    reviews: 2210,
    desc: 'Floating effortlessly at the lowest point on earth. Absolute peace and wellness.',
    descAr: 'طفو خالي من الجهد في أخفض بقعة على وجه الأرض ومياه علاجية غنية بالمعادن.',
    longDesc: 'At over 430 meters below sea level, the hypersaline waters allow effortless flotation. Its mineral-rich black mud is world-renowned for therapeutic skin wellness.',
    image: 'assets/dead sea 2.jpg',
    location: 'Jordan Rift Valley',
    locationAr: 'غور الأردن',
    coordinates: { x: 44, y: 46 },
    type: 'nature',
    season: 'Spring (Feb–May) & Autumn (Oct–Dec)',
    advice: [
      'Do NOT shave within 24 hours prior to swimming',
      'Do not splash water into eyes; carry fresh rinse water',
      'Limit soaking to 15-20 minutes intervals',
      'Apply natural black mineral mud before swimming'
    ],
    duration: 'Half Day to Full Day'
  },
  {
    id: 'jerash',
    name: 'Jerash Roman Ruins',
    nameAr: 'آثار جرش الرومانية',
    category: 'history',
    subCategory: 'Decapolis',
    rating: 4.8,
    reviews: 1820,
    desc: 'Walk through the exceptionally preserved ancient colonnaded streets and grand theaters.',
    descAr: 'تجوّل في شوارع الأعمدة الرومانية والمسارح الأثرية المحفوظة بعناية فائقة.',
    longDesc: 'Considered one of the largest and best-preserved Roman architectural sites outside Italy. Highlights include Hadrian’s Arch, the Oval Forum, and the Temple of Artemis.',
    image: 'assets/Jerash Roman Ruins.jpg',
    location: 'Jerash Governorate',
    locationAr: 'محافظة جرش',
    coordinates: { x: 53, y: 25 },
    type: 'ancient',
    season: 'Spring (March–May) with wildflower blooms',
    advice: [
      'Wear shoes with good traction on paved stone roads',
      'Wear a sun hat as there is little shade inside forum',
      'Hire a licensed local guide for historical storytelling'
    ],
    duration: '3-4 hours'
  },
  {
    id: 'amman-citadel',
    name: 'Amman Citadel & Souqs',
    nameAr: 'جبل القلعة ووسط البلد',
    category: 'history',
    subCategory: 'Capital',
    rating: 4.8,
    reviews: 3100,
    desc: 'Ancient citadel pillars overlooking seven golden hills, vibrant souqs, and Hashem food.',
    descAr: 'أعمدة هرقل التاريخية المطلة على تلال عمان، وأسواق وسط البلد ومطاعمها العريقة.',
    longDesc: 'Perched on Jabal al-Qal’a, the Citadel features the Roman Temple of Hercules and the Umayyad Palace with 360-degree panoramic views of Amman.',
    image: 'assets/amman_citadel.jpg',
    location: 'Downtown Amman',
    locationAr: 'وسط البلد، عمّان',
    coordinates: { x: 55, y: 32 },
    type: 'popular',
    season: 'Year-round, especially sunset hours',
    advice: [
      'Visit at 5:00 PM for sunset golden hour over amphitheater',
      'Walk down to Hashem Restaurant for stuffed falafel',
      'Taste hot Knafeh at Habibah Sweets in the alley'
    ],
    duration: 'Half Day (3-5 hours)'
  },
  {
    id: 'dana-biosphere',
    name: 'Dana Biosphere Reserve',
    nameAr: 'محمية ضانا للمحيط الحيوي',
    category: 'nature',
    subCategory: 'Reserve',
    rating: 4.9,
    reviews: 1420,
    desc: 'Walk through four distinct biogeographical zones, hosting hundreds of rare desert species.',
    descAr: 'محمية طبيعية فريدة تجمع أربع مناطق مناخية جغرافية مع تنوع بيئي نادر.',
    longDesc: 'Jordan’s largest nature reserve covers 320 sq km from Mediterranean oak down to desert dunes, featuring the legendary Feynan Ecolodge.',
    image: 'assets/Dana Biosphere Reserve.jpg',
    location: 'Tafilah Governorate',
    locationAr: 'محافظة الطفيلة',
    coordinates: { x: 50, y: 61 },
    type: 'nature',
    season: 'March to May & Sept to Nov',
    advice: [
      'Hire a local community Bedouin ranger guide',
      'Bring a reusable 2-liter water pack',
      'Stay overnight at Feynan for candlelit dinner'
    ],
    duration: 'Full Day or Overnight'
  }
];

const PLACE_DETAILS = [
  { id: 'ajloun-castle', name: 'Ajloun Castle', category: 'history', hiddenGem: true, desc: 'A 12th-century Ayyubid fortress overlooking the wooded hills of northern Jordan.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Ajloun_Castle_1.jpg?width=1000', fallbackImage: 'assets/jerash.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Ajloun_Castle_1.jpg', location: 'Ajloun', coordinates: { x: 49, y: 21 }, geo: [32.327, 35.751], season: 'Spring and autumn', advice: ['Allow time for the steep stairways and hilltop views', 'Combine with Ajloun Forest Reserve'], duration: '2-3 hours', travelFromAmman: 75 },
  { id: 'umm-qais', name: 'Umm Qais (Gadara)', category: 'history', hiddenGem: true, desc: 'Black-basalt Roman streets and a sweeping view over the Sea of Galilee and Yarmouk gorge.', image: 'assets/Umm Qais.jpg', location: 'Irbid Governorate', coordinates: { x: 33, y: 13 }, geo: [32.653, 35.684], season: 'Spring and autumn', advice: ['Wear sturdy shoes on uneven basalt', 'Check opening hours before the long drive north'], duration: '2-3 hours', travelFromAmman: 115 },
  { id: 'pella', name: 'Pella (Tabaqat Fahl)', category: 'history', hiddenGem: true, desc: 'A layered archaeological landscape with remains from several ancient civilizations.', image: 'assets/Pella (Tabaqat Fahl).jpg', location: 'Jordan Valley, Irbid', coordinates: { x: 38, y: 23 }, geo: [32.455, 35.618], season: 'Spring and autumn', advice: ['Bring water and sun protection', 'The site is spread across sloping ground'], duration: '2-3 hours', travelFromAmman: 95 },
  { id: 'qasr-mshatta', name: 'Qasr al-Mshatta', category: 'history', hiddenGem: true, desc: 'An unfinished Umayyad desert palace known for its monumental carved stone facade.', image: 'assets/Qasr al-Mshatta.jpg', location: 'South of Amman', coordinates: { x: 59, y: 40 }, geo: [31.803, 36.323], season: 'October to April', advice: ['Arrange transport in advance', 'Confirm access and opening times before visiting'], duration: '1-2 hours', travelFromAmman: 40 },
  { id: 'umm-ar-rasas', name: 'Umm ar-Rasas', category: 'history', hiddenGem: true, desc: 'A UNESCO-listed archaeological site with the mosaic floor of St Stephen’s Church.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Umm_Rasas_Fisherman.JPG?width=1000', fallbackImage: 'assets/jerash.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Umm_Rasas_Fisherman.JPG', location: 'Madaba Governorate', coordinates: { x: 57, y: 50 }, geo: [31.500, 35.920], season: 'October to April', advice: ['Check site access before setting out', 'Bring sun protection; shade is limited'], duration: '1-2 hours', travelFromAmman: 75 },
  { id: 'qasr-amra', name: "Qusayr 'Amra", category: 'history', hiddenGem: true, desc: 'A UNESCO-listed Umayyad desert retreat celebrated for its early wall paintings.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Qasr_Amra.jpg?width=1000', fallbackImage: 'assets/amman_citadel.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Qasr_Amra.jpg', location: 'Azraq area', coordinates: { x: 75, y: 39 }, geo: [31.801, 36.586], season: 'October to April', advice: ['Pair with other eastern desert castles', 'Carry water and confirm opening hours'], duration: '1-2 hours', travelFromAmman: 85 },
  { id: 'ajloun-reserve', name: 'Ajloun Forest Reserve', category: 'nature', hiddenGem: true, desc: 'Oak and pistachio woodland trails in Jordan’s northern highlands.', image: 'assets/Ajloun Forest Reserve.jpg', location: 'Ajloun', coordinates: { x: 46, y: 19 }, geo: [32.380, 35.752], season: 'March to May', advice: ['Reserve guided trails and cabins ahead', 'Wear layers and trail shoes'], duration: 'Half day', travelFromAmman: 80 },
  { id: 'wadi-mujib', name: 'Wadi Mujib Biosphere Reserve', category: 'adventure', hiddenGem: true, desc: 'A dramatic canyon reserve descending toward the Dead Sea, with seasonal guided water trails.', image: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wadi_Mujib2.jpeg?width=1000', fallbackImage: 'assets/dead_sea.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Wadi_Mujib2.jpeg', location: 'Dead Sea Highway', coordinates: { x: 49, y: 53 }, geo: [31.467, 35.573], season: 'April to October for water trails', advice: ['Book the trail and guide in advance', 'Water trails have seasonal access and fitness requirements'], duration: '3-4 hours', travelFromAmman: 90 },
  { id: 'wadi-bin-hammad', name: 'Wadi Bin Hammad', category: 'adventure', hiddenGem: true, desc: 'A palm-lined canyon near Karak with a guided route through flowing water and rock walls.', image: 'assets/Wadi Bin Hammad.jpg', location: 'Karak Governorate', coordinates: { x: 43, y: 62 }, geo: [31.271, 35.626], season: 'Spring and autumn', advice: ['Use a local guide and check water conditions', 'Bring water shoes and a dry change of clothes'], duration: '3-4 hours', travelFromAmman: 135 },
  { id: 'wadi-hidan', name: 'Wadi Hidan', category: 'adventure', hiddenGem: true, desc: 'A guided canyoning route through pools and waterfalls in the Madaba highlands.', image: 'assets/Wadi Hidan.jpg', location: 'Madaba Governorate', coordinates: { x: 51, y: 44 }, geo: [31.585, 35.756], season: 'Spring to early autumn', advice: ['Go with an authorized local guide', 'Confirm water levels and seasonal access'], duration: '4-5 hours', travelFromAmman: 75 },
  { id: 'ma-in-hot-springs', name: "Ma'in Hot Springs", category: 'relaxation', medical: true, desc: 'Mineral-rich thermal waterfalls and spa facilities in a deep valley near the Dead Sea.', image: 'assets/Main Hot Springs.jpg', fallbackImage: 'assets/dead_sea.jpg', imageSource: 'https://commons.wikimedia.org/wiki/File:Ma%27in_Hot_Springs_01.jpg', location: 'Madaba Governorate', coordinates: { x: 50, y: 48 }, geo: [31.603, 35.609], season: 'October to May', advice: ['Check resort day-use availability before travel', 'Use marked bathing areas and follow on-site safety advice'], duration: 'Half day', travelFromAmman: 70 },
  { id: 'jordan-valley', name: 'Jordan Valley (Al-Ghor)', category: 'nature', hiddenGem: true, desc: 'A fertile rift valley of farms, river landscapes, and small communities between the highlands and the Dead Sea.', image: 'assets/Jordan Valley (Al-Ghor).jpg', location: 'Jordan Valley', coordinates: { x: 35, y: 39 }, geo: [32.100, 35.570], season: 'October to April', advice: ['Plan stops with local hosts and farms', 'Summer temperatures can be very high'], duration: 'Half day', travelFromAmman: 75 },
  { id: 'aqaba', name: 'Aqaba Marine Park', category: 'nature', adventure: true, desc: 'Red Sea coral reefs and protected shore sites for snorkeling and diving with licensed operators.', image: 'assets/dead_sea.jpg', location: 'Aqaba', coordinates: { x: 53, y: 91 }, geo: [29.526, 35.007], season: 'March to May and September to November', advice: ['Use licensed operators and reef-safe practices', 'Book diving trips and equipment ahead'], duration: 'Half day', travelFromAmman: 240 },
].map(place => ({
  nameAr: place.name,
  descAr: place.desc,
  longDesc: place.desc,
  subCategory: place.category.replace('-', ' '),
  rating: 4.7,
  reviews: 0,
  type: place.category,
  coordinates: place.coordinates,
  geo: place.geo,
  season: place.season || 'Spring and autumn',
  advice: place.advice || ['Check local opening times before visiting', 'Bring water and sun protection'],
  duration: place.duration || '2-3 hours',
  categories: [place.category, ...(place.hiddenGem ? ['hidden-gems'] : []), ...(place.medical ? ['medical'] : []), ...(place.adventure ? ['adventure'] : []), ...(place.food ? ['food'] : [])],
  ...place
}));

PLACES.push(...PLACE_DETAILS);

PLACES.forEach(place => {
  place.geo ||= ({
    petra: [30.328, 35.444],
    'wadi-rum': [29.576, 35.420],
    'dead-sea': [31.559, 35.473],
    jerash: [32.280, 35.899],
    'amman-citadel': [31.954, 35.934],
    'dana-biosphere': [30.676, 35.610]
  })[place.id];
  place.categories ||= [place.category, ...(place.id === 'amman-citadel' ? ['food'] : [])];
  place.hiddenGem ||= false;
  place.travelFromAmman ||= Math.round(20 + Math.hypot(place.geo[0] - 31.953, (place.geo[1] - 35.930) * 0.85) * 65);
  place.mapLabel ||= ({
    petra: 'Petra', 'wadi-rum': 'Wadi Rum', 'dead-sea': 'Dead Sea', jerash: 'Jerash',
    'amman-citadel': 'Amman', 'dana-biosphere': 'Dana'
  })[place.id] || place.location.split(',')[0].replace('Governorate', '').trim();
});

const JORDAN_CITIES = [
  { id: 'amman', name: 'Amman', nameAr: 'عمّان', governorate: 'Amman', desc: 'Jordan’s capital is a city of hills, Roman ruins, busy souqs, galleries, and contemporary cafés.', info: 'Visit the Citadel and Roman Theater, then explore the downtown markets and the distinct neighborhoods spread across the city’s hills.', highlight: 'Amman Citadel and Roman Theater', image: 'assets/amman_citadel.jpg', geo: [31.953, 35.930], map: { x: 55, y: 32 } },
  { id: 'zarqa', name: 'Zarqa', nameAr: 'الزرقاء', governorate: 'Zarqa', desc: 'A major industrial and commercial city northeast of Amman, close to the historic desert-castle route.', info: 'Zarqa is one of Jordan’s largest urban centers. Its location makes it a useful base for exploring the eastern desert and its Umayyad sites.', highlight: 'Azraq and the eastern desert castles', image: 'assets/amman_citadel.jpg', geo: [32.072, 36.088], map: { x: 61, y: 29 } },
  { id: 'russeifa', name: 'Russeifa', nameAr: 'الرصيفة', governorate: 'Zarqa', desc: 'A densely populated city between Amman and Zarqa, part of Jordan’s central urban corridor.', info: 'Russeifa grew as a residential and industrial center linking the capital with Zarqa. It offers a glimpse of everyday life in the country’s largest metropolitan area.', highlight: 'Central Jordan’s urban corridor', image: 'assets/amman_citadel.jpg', geo: [32.017, 36.047], map: { x: 58, y: 34 } },
  { id: 'irbid', name: 'Irbid', nameAr: 'إربد', governorate: 'Irbid', desc: 'Northern Jordan’s university city, surrounded by fertile farmland and archaeological sites.', info: 'Irbid is a lively northern hub for cafés, markets, and universities. Nearby Umm Qais and Pella reveal the region’s long history and broad landscapes.', highlight: 'Umm Qais and the northern hills', image: 'assets/jerash.jpg', geo: [32.556, 35.846], map: { x: 49, y: 16 } },
  { id: 'ramtha', name: 'Ar-Ramtha', nameAr: 'الرمثا', governorate: 'Irbid', desc: 'A northern border city with a strong trading character and close ties to the surrounding villages.', info: 'Ar-Ramtha sits in the fertile north near the Syrian border. Local markets and nearby agricultural communities give the city a distinct regional character.', highlight: 'Northern markets and countryside', image: 'assets/jerash.jpg', geo: [32.560, 36.008], map: { x: 55, y: 14 } },
  { id: 'mafraq', name: 'Al-Mafraq', nameAr: 'المفرق', governorate: 'Mafraq', desc: 'A crossroads in northeastern Jordan connecting the capital with the north and eastern desert.', info: 'Al-Mafraq is an important transport and service center. From here, travelers can reach Azraq, the desert reserves, and the historic castles to the east.', highlight: 'Eastern desert and Azraq', image: 'assets/amman_citadel.jpg', geo: [32.342, 36.208], map: { x: 66, y: 22 } },
  { id: 'jerash', name: 'Jerash', nameAr: 'جرش', governorate: 'Jerash', desc: 'A northern city best known for one of the world’s best-preserved Roman provincial cities.', info: 'The archaeological site of ancient Gerasa features colonnaded streets, plazas, temples, and theaters. The modern city sits right beside the ruins.', highlight: 'The ancient Roman city of Gerasa', image: 'assets/jerash.jpg', geo: [32.280, 35.899], map: { x: 53, y: 25 } },
  { id: 'ajloun', name: 'Ajloun', nameAr: 'عجلون', governorate: 'Ajloun', desc: 'A green highland city surrounded by oak forests, orchards, and rolling northern hills.', info: 'Ajloun is known for its hilltop castle and forest reserve. Spring brings wildflowers and comfortable weather for walking in the surrounding countryside.', highlight: 'Ajloun Castle and forest reserve', image: 'assets/jerash.jpg', geo: [32.333, 35.752], map: { x: 49, y: 21 } },
  { id: 'anjara', name: 'Anjara', nameAr: 'عنجرة', governorate: 'Ajloun', desc: 'A hillside town in Ajloun Governorate with a close connection to the region’s wooded countryside.', info: 'Anjara lies among the green highlands of northern Jordan. It makes a quiet stop when exploring Ajloun’s villages, local food, and nearby historic sites.', highlight: 'Ajloun’s highland villages', image: 'assets/jerash.jpg', geo: [32.306, 35.727], map: { x: 47, y: 23 } },
  { id: 'salt', name: 'As-Salt', nameAr: 'السلط', governorate: 'Balqa', desc: 'A historic hill city celebrated for its honey-colored stone houses and generous hospitality.', info: 'As-Salt’s historic center preserves Ottoman-era architecture and lively market streets. Walking tours share stories of the city’s merchants and diverse communities.', highlight: 'Historic As-Salt and its heritage houses', image: 'assets/amman_citadel.jpg', geo: [32.039, 35.727], map: { x: 49, y: 34 } },
  { id: 'fuheis', name: 'Fuheis', nameAr: 'الفحيص', governorate: 'Balqa', desc: 'A small highland city northwest of Amman, known for its stone homes and community festivals.', info: 'Fuheis offers a relaxed feel among the hills and orchards of Balqa. Its cultural events and traditional architecture make it a pleasant short visit from Amman.', highlight: 'Old town streets and summer festival', image: 'assets/amman_citadel.jpg', geo: [32.006, 35.780], map: { x: 51, y: 32 } },
  { id: 'madaba', name: 'Madaba', nameAr: 'مادبا', governorate: 'Madaba', desc: 'A welcoming city famed for Byzantine mosaics, especially the ancient map in St George’s Church.', info: 'Madaba’s churches, archaeological park, and artisan workshops showcase a remarkable mosaic tradition. Mount Nebo is a short drive away.', highlight: 'The Madaba Map at St George’s Church', image: 'assets/amman_citadel.jpg', geo: [31.719, 35.794], map: { x: 55, y: 43 } },
  { id: 'sahab', name: 'Sahab', nameAr: 'سحاب', governorate: 'Amman', desc: 'An industrial city southeast of Amman that anchors communities on the capital’s outskirts.', info: 'Sahab is part of the expanding Amman metropolitan area. Its busy commercial streets reflect the working and industrial life that supports the capital.', highlight: 'Amman’s southeastern urban edge', image: 'assets/amman_citadel.jpg', geo: [31.870, 36.005], map: { x: 60, y: 39 } },
  { id: 'dhiban', name: 'Dhiban', nameAr: 'ذيبان', governorate: 'Madaba', desc: 'A historic town on the King’s Highway near the highlands above the Dead Sea.', info: 'Dhiban stands in a region with deep Moabite and biblical-era history. The surrounding plateau offers expansive views and access to rural communities.', highlight: 'The ancient Moabite plateau', image: 'assets/jerash.jpg', geo: [31.500, 35.802], map: { x: 50, y: 53 } },
  { id: 'karak', name: 'Karak', nameAr: 'الكرك', governorate: 'Karak', desc: 'A hilltop city in southern Jordan known for its vast medieval Crusader castle.', info: 'Karak Castle’s tunnels, halls, and ramparts overlook the surrounding plateau. The city is also a gateway to southern villages and traditional Jordanian food.', highlight: 'Karak Castle', image: 'assets/jerash.jpg', geo: [31.181, 35.704], map: { x: 46, y: 58 } },
  { id: 'tafilah', name: 'At-Tafilah', nameAr: 'الطفيلة', governorate: 'Tafilah', desc: 'A quiet southern highland city near Dana Biosphere Reserve and historic copper-mining areas.', info: 'At-Tafilah is surrounded by rugged landscapes and traditional villages. It provides access to Dana’s hiking trails and the southern highlands.', highlight: 'Dana Biosphere Reserve', image: 'assets/wadi_rum.jpg', geo: [30.837, 35.604], map: { x: 49, y: 66 } },
  { id: 'ghor-safi', name: 'Ghor as-Safi', nameAr: 'غور الصافي', governorate: 'Karak', desc: 'A fertile community at the southern end of the Dead Sea, where farms meet desert landscapes.', info: 'Ghor as-Safi has a warm climate and productive agricultural lands. Nearby sites include the Museum at the Lowest Place on Earth and the historic sanctuary of Lot.', highlight: 'Dead Sea southern shore and Lot’s Cave', image: 'assets/dead_sea.jpg', geo: [31.036, 35.465], map: { x: 45, y: 75 } },
  { id: 'maan', name: 'Ma’an', nameAr: 'معان', governorate: 'Ma’an', desc: 'A southern desert city and transport hub on the route toward Petra and Aqaba.', info: 'Ma’an has long served travelers crossing southern Jordan. Its location connects desert landscapes, historic trade routes, and the nearby archaeological region of Petra.', highlight: 'Southern trade routes and Petra region', image: 'assets/petra.jpg', geo: [30.192, 35.735], map: { x: 57, y: 79 } },
  { id: 'wadi-musa', name: 'Wadi Musa', nameAr: 'وادي موسى', governorate: 'Ma’an', desc: 'The modern gateway town beside Petra, with hotels, restaurants, and services for visitors.', info: 'Wadi Musa is the main base for exploring Petra. Start early for the Siq and Treasury, and allow time for the Monastery and surrounding trails.', highlight: 'Petra Visitor Center and the Siq', image: 'assets/petra.jpg', geo: [30.323, 35.479], map: { x: 57, y: 72 } },
  { id: 'shobak', name: 'Shobak', nameAr: 'الشوبك', governorate: 'Ma’an', desc: 'A cool southern highland town whose Crusader castle rises above orchards and valleys.', info: 'Shobak Castle, also known as Montreal, sits above the King’s Highway. The area is known for apple orchards, mountain air, and dramatic views.', highlight: 'Shobak Castle', image: 'assets/jerash.jpg', geo: [30.522, 35.568], map: { x: 53, y: 65 } },
  { id: 'aqaba', name: 'Aqaba', nameAr: 'العقبة', governorate: 'Aqaba', desc: 'Jordan’s Red Sea port city, with coral reefs, beaches, and a relaxed waterfront.', info: 'Aqaba is the country’s coastal escape. Licensed operators offer snorkeling and diving among Red Sea reefs, while the old town and fort make easy city stops.', highlight: 'Aqaba Marine Park and the Red Sea', image: 'assets/dead_sea.jpg', geo: [29.526, 35.007], map: { x: 53, y: 91 } },
  { id: 'azraq', name: 'Azraq', nameAr: 'الأزرق', governorate: 'Zarqa', desc: 'An oasis town in Jordan’s eastern desert, surrounded by wetlands and historic desert castles.', info: 'Azraq is known for its wetland reserve and nearby Umayyad castles, including Qasr al-Azraq and Qusayr Amra. The landscape is a striking contrast to the western highlands.', highlight: 'Azraq Wetland Reserve and desert castles', image: 'assets/wadi_rum.jpg', geo: [31.883, 36.830], map: { x: 75, y: 39 } },
  { id: 'umm-qais', name: 'Umm Qais', nameAr: 'أم قيس', governorate: 'Irbid', desc: 'A northern hilltop village built beside the ancient Decapolis city of Gadara.', info: 'Umm Qais combines black-basalt ruins with broad views over the Sea of Galilee and Yarmouk gorge. The old Ottoman village adds another layer to the visit.', highlight: 'Gadara ruins and the Sea of Galilee viewpoint', image: 'assets/jerash.jpg', geo: [32.653, 35.684], map: { x: 33, y: 13 } },
  { id: 'kufranjah', name: 'Kufranjah', nameAr: 'كفرنجة', governorate: 'Ajloun', desc: 'A valley town in Ajloun surrounded by orchards, woodland, and northern highland scenery.', info: 'Kufranjah is a gateway to the agricultural valleys and forested slopes of Ajloun. It offers a quieter view of everyday life beyond Jordan’s main tourist routes.', highlight: 'Ajloun’s orchards and forested valleys', image: 'assets/jerash.jpg', geo: [32.267, 35.743], map: { x: 45, y: 24 } }
];

const CITY_MAP_PLACES = JORDAN_CITIES.map(city => ({
  id: `city-${city.id}`, name: city.name, nameAr: city.nameAr, category: 'history',
  subCategory: `${city.governorate} Governorate`, rating: 4.6, reviews: 1,
  desc: city.desc, longDesc: city.info, image: city.image,
  location: `${city.governorate} Governorate`, geo: city.geo, coordinates: city.map,
  type: 'city', season: 'Year-round',
  advice: ['Check opening hours for nearby attractions before visiting.', 'Ask permission before photographing residents.'],
  duration: 'Half day', categories: ['history'], mapLabel: city.name
}));

const LOCAL_EXPERIENCES = [
  {
    id: 'mansaf',
    title: 'Cook Mansaf with a Local Family',
    titleAr: 'طهي المنسف الأصلي مع عائلة أردنية',
    location: 'Amman Downtown',
    duration: '4 hours',
    price: 45,
    rating: 4.9,
    image: 'assets/mansaf.jpg',
    host: 'Um Ahmad Al-Zoubi (Heritage Chef)',
    desc: 'Learn how to crush real Karak Jameed stone into rich broth, simmer tender lamb, and master the hospitable etiquette of eating Mansaf.'
  },
  {
    id: 'tatreez',
    title: 'Learn Tatreez Embroidery',
    titleAr: 'ورشة فن التطريز التراثي',
    location: 'Madaba Workshops',
    duration: '3 hours',
    price: 35,
    rating: 4.8,
    image: 'assets/tatreez.jpg',
    host: 'Lina Hijazi (Master Artisan)',
    desc: 'Learn ancient cross-stitch geometric patterns with dyed silk threads on linen fabric and create your own handmade keepsake.'
  },
  {
    id: 'shmagh',
    title: 'Tahdeeb Shmagh Workshop',
    titleAr: 'ورشة تهديب الشماغ الأردني الأصيل',
    location: 'As-Salt Heritage',
    duration: '2 hours',
    price: 30,
    rating: 4.9,
    image: 'assets/tahdeeb shmagh.jpg',
    host: 'Khadija Al-Khatib (Salt Crafts)',
    desc: 'Learn the intricate traditional hand-knotting art of Tahdeeb (white cotton tassels on red Jordanian keffiyeh) with Salti craftswomen.'
  },
  {
    id: 'coffee',
    title: 'Jordanian Bedouin Coffee Ceremony',
    titleAr: 'طقوس القهوة السادة عند البدو',
    location: 'Wadi Rum Tents',
    duration: '1.5 hours',
    price: 25,
    rating: 5.0,
    image: 'assets/bedouin_tea.jpg',
    host: 'Sheikh Suleiman (Bedouin Elder)',
    desc: 'Roast green coffee beans over hot desert embers, grind them in a musical brass Mihbash, and learn the codes of Bedouin coffee cups.'
  }
];

LOCAL_EXPERIENCES.push(
  { id: 'olive-picking', title: 'Olive Picking in Ajloun', titleAr: 'قطاف الزيتون في عجلون', location: 'Ajloun', duration: '3 hours', price: 28, rating: 4.8, image: 'assets/Olive Picking.jpg', host: 'Local olive-growing family', desc: 'Join a seasonal harvest, learn how olives are sorted, and share a simple meal with a farming family.' },
  { id: 'desert-camp', title: 'Desert Camp Bonding', titleAr: 'تجربة مخيم بدوي', location: 'Wadi Rum', duration: 'Overnight', price: 85, rating: 4.9, image: 'assets/wadi_rum.jpg', host: 'Wadi Rum community camp', desc: 'Spend an evening around the fire with Bedouin hosts, a traditional zarb dinner, and stories beneath the desert sky.' },
  { id: 'spice-market', title: 'Spice Market & Downtown', titleAr: 'سوق التوابل ووسط البلد', location: 'Downtown Amman', duration: '2 hours', price: 22, rating: 4.8, image: 'assets/Downtown.jpg', host: 'Amman food host', desc: 'Explore spice stalls and bakeries, learn familiar Jordanian blends, and taste a few neighborhood favorites.' },
  { id: 'guided-hike', title: 'Hike with a Local Trail Guide', titleAr: 'مسير مع دليل محلي', location: 'Dana Biosphere Reserve', duration: '4 hours', price: 38, rating: 4.9, image: 'assets/Hike.jpg', host: 'Community trail guide', desc: 'Follow a marked reserve trail with a local guide who shares the area’s plants, wildlife, and village history.' }
);

// App State
function readLocalData(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function writeLocalData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    showToast('This change could not be saved in this browser.', 'error');
    return false;
  }
}

const DEFAULT_TRAVELER_STORIES = [
  { id: 'sample-petra', author: 'Lina Haddad', country: 'United Kingdom', location: 'Petra, Jordan', title: 'Petra before the crowds', content: 'We arrived early and walked through the Siq while the morning was still cool. The Treasury appeared slowly between the rock walls, and we took our time before exploring the quieter paths beyond it. Comfortable shoes, water, and an unhurried start made the day much better.', image: 'assets/petra.jpg', likes: 18, sample: true },
  { id: 'sample-wadi-rum', author: 'Maya Chen', country: 'Singapore', location: 'Wadi Rum, Jordan', title: 'A night under desert skies', content: 'Our hosts shared tea and stories around the fire before dinner. The night sky was clear, but what stayed with us most was learning about daily life in the desert from the people who call it home. Bring a warm layer after sunset and confirm what is included with your camp before you travel.', image: 'assets/wadi_rum.jpg', likes: 24, sample: true },
  { id: 'sample-amman', author: 'Daniel Ruiz', country: 'Spain', location: 'Amman, Jordan', title: 'Getting happily lost downtown', content: 'We followed the smell of fresh bread through the market lanes and stopped for falafel, tea, and a long conversation with a shopkeeper. Downtown is easier to enjoy when you leave space in the afternoon and ask before photographing people. We finished the day walking back toward the Roman Theater as the light softened.', image: 'assets/amman_citadel.jpg', likes: 11, sample: true }
];

let travelerStories = readLocalData('darbak-stories', [...DEFAULT_TRAVELER_STORIES]);
let storyEngagement = readLocalData('darbak-story-engagement', {});
let activeStoryId = null;
let storyPhotoDataUrl = '';

let currentLanguage = 'en';
let activeView = 'home';
const DEFAULT_SAVED_PLACES = ['petra', 'wadi-rum', 'dead-sea'];
let savedPlaces = readLocalData('darbak-saved-places', [...DEFAULT_SAVED_PLACES]);
let scheduledPlaces = {
  '2026-10-12': ['petra'],
  '2026-10-13': ['wadi-rum'],
  '2026-10-14': ['dead-sea']
};
let favoritePlaces = new Set();
let selectedCalendarDate = '2026-10-12';
let activeMapPinId = 'petra';
let jordanMap = null;
let jordanMapMarkers = null;
let jordanTileLayer = null;
let mapCategory = 'all';
let mapSearch = '';
let mapFilterMode = 'all';
let visitorCoordinates = null;
let exploreCategory = 'all';
let exploreSearch = '';
let exploreVisibleCount = 6;
let dismissedExplorePlaces = new Set();
let itineraryDays = 5;
let itineraryInterests = new Set();
let itineraryTravelerType = '';
let itineraryBudget = 'balanced';
let itineraryEditMode = false;
let savedExperiences = new Set(readLocalData('darbak-saved-experiences', []));
let favoriteExperiences = new Set();
let lastFocusedElement = null;
let translationRetryTimer = null;
let currentUserTrips = [];
let authMode = 'signin';
let bookedExperiences = readLocalData('darbak-booked-experiences', []);
let savedTripPlans = readLocalData('darbak-trip-plans', []);
let currentTripPlan = savedTripPlans[0] || null;

const firebaseState = {
  auth: null,
  db: null,
  storage: null,
  user: null,
  loadingAuth: true,
  ready: false
};

function isFirebaseAvailable() {
  return !!(window.darbakFirebase && window.darbakFirebase.auth && window.darbakFirebase.db);
}

function getFriendlyErrorMessage(error, fallbackMessage = 'Something went wrong. Please try again.') {
  if (!error || !error.code) return fallbackMessage;

  const messageMap = {
    'auth/invalid-email': 'Please enter a valid email.',
    'auth/user-disabled': 'This account has been disabled. Please contact support.',
    'auth/user-not-found': 'Incorrect email or password.',
    'auth/wrong-password': 'Incorrect email or password.',
    'auth/email-already-in-use': 'An account with this email already exists.',
    'auth/weak-password': 'Choose a stronger password with at least 6 characters.',
    'auth/requires-recent-login': 'Please sign in again to continue.',
    'auth/network-request-failed': 'Network error. Please check your connection and try again.'
  };

  return messageMap[error.code] || fallbackMessage;
}

function requireAuth(actionLabel = 'this action') {
  if (!firebaseState.user) {
    openAuthModal();
    showToast(`Please sign in to ${actionLabel}.`, 'info');
    return false;
  }
  return true;
}

function updateAuthHeaderUI() {
  const headerButton = document.getElementById('btn-login-header');
  if (!headerButton) return;

  if (firebaseState.loadingAuth) {
    headerButton.textContent = 'Checking...';
    headerButton.disabled = true;
    return;
  }

  headerButton.disabled = false;
  if (firebaseState.user) {
    const displayName = firebaseState.user.displayName || firebaseState.user.email?.split('@')[0] || 'Traveler';
    headerButton.textContent = `Sign Out · ${displayName}`;
    headerButton.title = `Signed in as ${displayName}`;
    return;
  }

  headerButton.textContent = 'Login';
  headerButton.title = 'Login to save places and trips';
}

async function initializeFirebaseIntegration() {
  firebaseState.ready = isFirebaseAvailable();
  firebaseState.auth = firebaseState.ready ? window.darbakFirebase.auth : null;
  firebaseState.db = firebaseState.ready ? window.darbakFirebase.db : null;
  firebaseState.storage = firebaseState.ready ? window.darbakFirebase.storage : null;
  firebaseState.loadingAuth = true;
  updateAuthHeaderUI();

  if (!firebaseState.ready) {
    firebaseState.loadingAuth = false;
    updateAuthHeaderUI();
    return;
  }

  firebaseState.auth.onAuthStateChanged(async (user) => {
    firebaseState.user = user;
    firebaseState.loadingAuth = false;
    updateAuthHeaderUI();

    if (user) {
      await ensureUserDocument(user);
      await loadUserData(user.uid);
      await loadStoriesFromFirestore();
    } else {
      savedPlaces = readLocalData('darbak-saved-places', [...DEFAULT_SAVED_PLACES]);
      favoritePlaces = new Set();
      savedExperiences = new Set(readLocalData('darbak-saved-experiences', []));
      favoriteExperiences = new Set();
      currentUserTrips = [];
      updateSavedCount();
      renderWonders();
      renderExploreGrid();
      renderLocalGrid();
      renderCalendar(2026, 9);
      renderSavedList();
      await loadStoriesFromFirestore();
    }
  });
}

async function ensureUserDocument(user) {
  if (!firebaseState.db || !user) return;

  const userRef = firebaseState.db.collection('users').doc(user.uid);
  const doc = await userRef.get();

  if (!doc.exists) {
    const profile = {
      email: user.email || '',
      displayName: user.displayName || user.email?.split('@')[0] || 'Jordan Traveler',
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    await userRef.set(profile, { merge: true });
  } else if (user.email && (!doc.data().email || doc.data().email !== user.email)) {
    await userRef.update({ email: user.email });
  }
}

async function loadUserData(uid) {
  if (!firebaseState.db || !uid) return;

  const userRef = firebaseState.db.collection('users').doc(uid);
  const [savedPlacesSnap, favoritesSnap, savedExperiencesSnap, favoriteExperiencesSnap, tripsSnap] = await Promise.all([
    userRef.collection('savedPlaces').get(),
    userRef.collection('favorites').get(),
    userRef.collection('savedExperiences').get(),
    userRef.collection('favoriteExperiences').get(),
    userRef.collection('trips').orderBy('updatedAt', 'desc').limit(10).get()
  ]);

  savedPlaces = savedPlacesSnap.docs.map(doc => doc.id);
  favoritePlaces = new Set(favoritesSnap.docs.map(doc => doc.id));
  savedExperiences = new Set(savedExperiencesSnap.docs.map(doc => doc.id));
  favoriteExperiences = new Set(favoriteExperiencesSnap.docs.map(doc => doc.id));
  currentUserTrips = tripsSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));

  updateSavedCount();
  renderWonders();
  renderExploreGrid();
  renderLocalGrid();
  renderCalendar(2026, 9);
  renderSavedList();
  updateActivePinCard();
}

async function savePlaceToFirestore(placeId) {
  if (!requireAuth('save this destination')) return false;

  try {
    const placeDoc = firebaseState.db.collection('users').doc(firebaseState.user.uid).collection('savedPlaces').doc(placeId);
    await placeDoc.set({
      placeId,
      savedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true });
    await loadUserData(firebaseState.user.uid);
    return true;
  } catch (error) {
    showToast(getFriendlyErrorMessage(error, 'Unable to save this destination right now.'), 'error');
    return false;
  }
}

async function removePlaceFromFirestore(placeId) {
  if (!requireAuth('remove this destination')) return false;

  try {
    await firebaseState.db.collection('users').doc(firebaseState.user.uid).collection('savedPlaces').doc(placeId).delete();
    await loadUserData(firebaseState.user.uid);
    return true;
  } catch (error) {
    showToast(getFriendlyErrorMessage(error, 'Unable to remove this destination right now.'), 'error');
    return false;
  }
}

async function toggleFavoriteInFirestore(placeId) {
  if (!requireAuth('save this favorite')) return false;

  try {
    const favoriteRef = firebaseState.db.collection('users').doc(firebaseState.user.uid).collection('favorites').doc(placeId);
    if (favoritePlaces.has(placeId)) {
      await favoriteRef.delete();
      favoritePlaces.delete(placeId);
      showToast('Favorite removed.', 'info');
    } else {
      await favoriteRef.set({
        placeId,
        savedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      favoritePlaces.add(placeId);
      showToast('Favorite saved to your account.', 'success');
    }
    renderExploreGrid();
    updateActivePinCard();
    return true;
  } catch (error) {
    showToast(getFriendlyErrorMessage(error, 'Unable to update this favorite right now.'), 'error');
    return false;
  }
}

async function toggleExperienceInFirestore(experienceId, collectionKey) {
  if (!requireAuth('save this experience')) return false;
  const isSaved = collectionKey === 'savedExperiences' ? savedExperiences.has(experienceId) : favoriteExperiences.has(experienceId);

  try {
    const targetCollection = collectionKey === 'savedExperiences' ? 'savedExperiences' : 'favoriteExperiences';
    const targetRef = firebaseState.db.collection('users').doc(firebaseState.user.uid).collection(targetCollection).doc(experienceId);
    if (isSaved) {
      await targetRef.delete();
      if (collectionKey === 'savedExperiences') savedExperiences.delete(experienceId); else favoriteExperiences.delete(experienceId);
      showToast('Experience removed from your saved list.', 'info');
    } else {
      await targetRef.set({
        experienceId,
        savedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      if (collectionKey === 'savedExperiences') savedExperiences.add(experienceId); else favoriteExperiences.add(experienceId);
      showToast('Experience saved to your account.', 'success');
    }
    renderLocalGrid();
    return true;
  } catch (error) {
    showToast(getFriendlyErrorMessage(error, 'Unable to update this experience right now.'), 'error');
    return false;
  }
}

async function handleAuthSubmit(event) {
  event.preventDefault();
  if (!firebaseState.auth) {
    showToast('Firebase is not configured yet. Paste your Firebase config into firebase-config.js.', 'info');
    return;
  }

  const form = event.currentTarget;
  const fullNameInput = document.getElementById('auth-name');
  const emailInput = document.getElementById('auth-email');
  const passwordInput = document.getElementById('auth-password');
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const displayName = (fullNameInput?.value || '').trim();

  if (!email || !password) {
    showToast('Please enter both your email and password.', 'error');
    return;
  }

  const submitButton = document.getElementById('auth-submit-btn');
  submitButton.disabled = true;
  submitButton.textContent = authMode === 'signin' ? 'Signing In...' : 'Creating Account...';

  try {
    if (authMode === 'signup') {
      if (!displayName) {
        showToast('Please enter your full name to create an account.', 'error');
        submitButton.disabled = false;
        submitButton.textContent = 'Create Account';
        return;
      }
      const userCredential = await firebaseState.auth.createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName });
      showToast('Account created. Welcome to Darbak!', 'success');
    } else {
      await firebaseState.auth.signInWithEmailAndPassword(email, password);
      showToast('Signed in successfully.', 'success');
    }
    form.reset();
    closeModal('auth-modal');
  } catch (error) {
    showToast(getFriendlyErrorMessage(error, 'Unable to complete authentication right now.'), 'error');
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = authMode === 'signin' ? 'Sign In' : 'Create Account';
  }
}

function setAuthMode(mode) {
  authMode = mode;
  const nameInput = document.getElementById('auth-name');
  const modalTitle = document.getElementById('auth-modal-title');
  const submitButton = document.getElementById('auth-submit-btn');
  const toggleButton = document.getElementById('auth-mode-toggle');

  if (nameInput) {
    nameInput.style.display = mode === 'signup' ? 'block' : 'none';
    nameInput.required = mode === 'signup';
  }

  if (modalTitle) modalTitle.textContent = mode === 'signup' ? 'Create Your Darbak Account' : 'Sign In to Darbak';
  if (submitButton) submitButton.textContent = mode === 'signup' ? 'Create Account' : 'Sign In';
  if (toggleButton) {
    toggleButton.textContent = mode === 'signup' ? 'Already have an account? Sign in' : 'Need an account? Create one';
  }
}

async function saveCurrentTripToFirestore() {
  if (!currentTripPlan) {
    showToast('Generate an itinerary before saving it.', 'info');
    return false;
  }

  const savedPlan = { ...currentTripPlan, id: currentTripPlan.id || `trip-${Date.now()}` };
  savedTripPlans = [savedPlan, ...savedTripPlans.filter(plan => plan.id !== savedPlan.id)].slice(0, 10);
  currentTripPlan = savedPlan;
  writeLocalData('darbak-trip-plans', savedTripPlans);
  renderSavedTripDetails();

  if (firebaseState.user && firebaseState.db) {
    try {
      const tripRef = firebaseState.db.collection('users').doc(firebaseState.user.uid).collection('trips').doc(savedPlan.id);
      await tripRef.set({
        duration: savedPlan.duration,
        interests: savedPlan.interests,
        destinations: savedPlan.destinations,
        travelerType: savedPlan.travelerType,
        budget: savedPlan.budget,
        estimatedCost: savedPlan.estimatedCost,
        itinerary: savedPlan.itinerary,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    } catch (error) {
      showToast('Itinerary saved on this device; cloud sync failed.', 'info');
      return true;
    }
  }
  showToast('Itinerary saved to My Trip.', 'success');
  return true;
}

function createStoryCard(story) {
  const article = document.createElement('article');
  article.className = 'traveler-story-card';
  article.dataset.storyId = story.id;

  const meta = document.createElement('div');
  meta.className = 'traveler-story-meta';
  const label = document.createElement('span');
  label.className = story.sample ? 'story-sample-label' : 'story-sample-label';
  label.textContent = story.sample ? 'Sample story' : 'Traveler story';
  const place = document.createElement('span');
  place.textContent = story.location || story.country || 'Jordan';
  meta.append(label, place);

  if (story.image) {
    const image = document.createElement('img');
    image.className = 'traveler-story-image';
    image.src = story.image;
    image.alt = `Photo shared with ${story.title || 'this traveler story'}`;
    image.loading = 'lazy';
    article.appendChild(image);
  }

  const title = document.createElement('h3');
  const openButton = document.createElement('button');
  openButton.type = 'button';
  openButton.className = 'story-open-button';
  openButton.dataset.storyOpen = story.id;
  title.textContent = story.title || 'Travel Story';

  const content = document.createElement('p');
  content.className = 'traveler-story-excerpt';
  content.textContent = story.content || '';
  const readMore = document.createElement('span');
  readMore.className = 'story-read-more';
  readMore.textContent = 'Read full story';
  openButton.append(title, content, readMore);

  const footer = document.createElement('footer');
  const author = document.createElement('span');
  author.textContent = story.author || 'Traveler';
  const country = document.createElement('span');
  country.textContent = story.country || 'Jordan';
  footer.append(author, country);

  const engagement = storyEngagement[story.id] || { liked: false, comments: [] };
  const actions = document.createElement('div');
  actions.className = 'story-card-actions';
  actions.innerHTML = `<button type="button" class="story-like-button" data-story-like="${story.id}" aria-pressed="${Boolean(engagement.liked)}">♥ <span>${Number(story.likes || 0) + (engagement.liked ? 1 : 0)}</span></button><button type="button" class="story-comment-button" data-story-open="${story.id}">Comments <span>${engagement.comments?.length || 0}</span></button>`;

  article.append(meta, openButton, footer, actions);
  return article;
}

function renderTravelerStories(stories = travelerStories) {
  const container = document.getElementById('traveler-stories-list');
  if (!container) return;
  container.replaceChildren(...stories.map(createStoryCard));
}

async function loadStoriesFromFirestore() {
  let remoteStories = [];
  if (firebaseState.db && firebaseState.user) {
    try {
      const snapshot = await firebaseState.db.collection('stories').orderBy('createdAt', 'desc').limit(12).get();
      remoteStories = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data(), sample: false }));
    } catch (error) {
      console.warn('Unable to load traveler stories from Firebase:', error);
    }
  }
  const remoteIds = new Set(remoteStories.map(story => story.id));
  travelerStories = [...remoteStories, ...travelerStories.filter(story => !remoteIds.has(story.id))];
  renderTravelerStories();
}

function renderStoryComments(story) {
  const container = document.getElementById('story-comments-list');
  if (!container) return;
  const comments = storyEngagement[story.id]?.comments || [];
  container.replaceChildren();
  if (!comments.length) {
    const empty = document.createElement('p');
    empty.className = 'trip-empty-note';
    empty.textContent = 'No comments yet.';
    container.appendChild(empty);
    return;
  }
  comments.forEach(comment => {
    const item = document.createElement('article');
    item.className = 'story-comment';
    const author = document.createElement('strong');
    author.textContent = comment.author || 'Traveler';
    const content = document.createElement('p');
    content.textContent = comment.content || '';
    item.append(author, content);
    container.appendChild(item);
  });
}

function openTravelerStory(storyId) {
  const story = travelerStories.find(item => item.id === storyId);
  const modal = document.getElementById('story-modal');
  if (!story || !modal) return;
  activeStoryId = storyId;
  const image = document.getElementById('story-detail-image');
  image.hidden = !story.image;
  if (story.image) image.src = story.image;
  document.getElementById('story-detail-title').textContent = story.title || 'Traveler story';
  document.getElementById('story-detail-location').textContent = story.location || story.country || 'Jordan';
  document.getElementById('story-detail-date').textContent = story.createdAt ? new Date(story.createdAt).toLocaleDateString() : 'Sample story';
  document.getElementById('story-detail-author').textContent = `${story.author || 'Traveler'} · ${story.country || 'Jordan'}`;
  document.getElementById('story-detail-content').textContent = story.content || '';
  const engagement = storyEngagement[storyId] || { liked: false, comments: [] };
  const likeButton = document.getElementById('story-detail-like');
  likeButton.textContent = `${engagement.liked ? '♥ Liked' : '♡ Like'} · ${Number(story.likes || 0) + (engagement.liked ? 1 : 0)}`;
  likeButton.setAttribute('aria-pressed', String(Boolean(engagement.liked)));
  renderStoryComments(story);
  lastFocusedElement = document.activeElement;
  modal.classList.add('open');
  modal.querySelector('.modal-close')?.focus();
}

function toggleTravelerStoryLike(storyId) {
  const engagement = storyEngagement[storyId] || { liked: false, comments: [] };
  engagement.liked = !engagement.liked;
  storyEngagement[storyId] = engagement;
  writeLocalData('darbak-story-engagement', storyEngagement);
  renderTravelerStories();
  if (activeStoryId === storyId) openTravelerStory(storyId);
}

function readStoryPhoto(file) {
  return new Promise((resolve, reject) => {
    if (!file) return resolve('');
    if (!file.type.startsWith('image/')) return reject(new Error('Choose an image file.'));
    if (file.size > 1024 * 1024) return reject(new Error('Choose a photo smaller than 1 MB.'));
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ''));
    reader.onerror = () => reject(new Error('The photo could not be read.'));
    reader.readAsDataURL(file);
  });
}

function setupStoryInteractions() {
  const container = document.getElementById('traveler-stories-list');
  container?.addEventListener('click', event => {
    const likeButton = event.target.closest('[data-story-like]');
    if (likeButton) {
      toggleTravelerStoryLike(likeButton.dataset.storyLike);
      return;
    }
    const openButton = event.target.closest('[data-story-open]');
    if (openButton) {
      openTravelerStory(openButton.dataset.storyOpen);
      return;
    }
    const card = event.target.closest('.traveler-story-card[data-story-id]');
    if (card && !event.target.closest('button, a')) openTravelerStory(card.dataset.storyId);
  });

  document.getElementById('story-detail-like')?.addEventListener('click', () => {
    if (activeStoryId) toggleTravelerStoryLike(activeStoryId);
  });
  document.getElementById('story-comment-form')?.addEventListener('submit', event => {
    event.preventDefault();
    const content = document.getElementById('story-comment-input').value.trim();
    if (!activeStoryId || !content) return;
    const engagement = storyEngagement[activeStoryId] || { liked: false, comments: [] };
    engagement.comments.push({ author: 'You', content, createdAt: new Date().toISOString() });
    storyEngagement[activeStoryId] = engagement;
    writeLocalData('darbak-story-engagement', storyEngagement);
    document.getElementById('story-comment-input').value = '';
    const story = travelerStories.find(item => item.id === activeStoryId);
    if (story) renderStoryComments(story);
    renderTravelerStories();
  });

  document.getElementById('story-photo')?.addEventListener('change', async event => {
    const preview = document.getElementById('story-photo-preview');
    try {
      storyPhotoDataUrl = await readStoryPhoto(event.target.files[0]);
      if (preview) {
        preview.hidden = !storyPhotoDataUrl;
        if (storyPhotoDataUrl) preview.querySelector('img').src = storyPhotoDataUrl;
      }
    } catch (error) {
      storyPhotoDataUrl = '';
      event.target.value = '';
      if (preview) preview.hidden = true;
      showToast(error.message, 'error');
    }
  });
  document.getElementById('remove-story-photo')?.addEventListener('click', () => {
    storyPhotoDataUrl = '';
    document.getElementById('story-photo').value = '';
    document.getElementById('story-photo-preview').hidden = true;
  });
}

function imageFallbackAttribute(place) {
  return place.fallbackImage ? `onerror="this.onerror=null;this.src='${place.fallbackImage}'"` : '';
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
  renderWonders();
  renderExploreGrid();
  renderJordanCities();
  renderLocalGrid();
  renderTravelerStories();
  renderMapPins();
  renderCalendar(2026, 9); // October 2026
  updateSavedCount();
  setupNavigation();
  setupEventListeners();
  setupStoryInteractions();
  setupAccessibility();
  applySavedLanguage();
  setAuthMode('signin');
  await initializeFirebaseIntegration();
  await loadStoriesFromFirestore();
  const returnView = sessionStorage.getItem('darbak-return-view');
  if (returnView) {
    sessionStorage.removeItem('darbak-return-view');
    showView(returnView);
  }
});

// View Navigation
function showView(viewId) {
  activeView = viewId;
  document.body.classList.toggle('jmap-view-active', viewId === 'jmap');
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const target = document.getElementById(`view-${viewId}`);
  if (target) {
    target.classList.add('active');
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.target === viewId);
  });

  if (viewId === 'jmap') {
    renderMapPins();
    requestAnimationFrame(() => jordanMap?.invalidateSize());
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
  requestPageTranslation();
}

function setupNavigation() {
  document.querySelectorAll('[data-target]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const target = el.dataset.target;
      if (target) showView(target);
    });
  });
}

// Render Wonders on Home
function renderWonders() {
  const container = document.getElementById('wonders-grid');
  if (!container) return;
  const wonders = [...PLACES].sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews)).slice(0, 4);

  container.innerHTML = wonders.map(p => `
    <div class="card">
      <div class="card-img-wrap">
        <img src="${p.image}" alt="${p.name}">
        <button class="card-save-btn ${savedPlaces.includes(p.id) ? 'saved' : ''}" onclick="toggleSave('${p.id}')">
          ♥
        </button>
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${currentLanguage === 'ar' ? p.nameAr : p.name}</h3>
          <p class="card-desc">${currentLanguage === 'ar' ? p.descAr : p.desc}</p>
        </div>
        <div class="card-footer">
          <button class="link-arrow" onclick="openPlaceModal('${p.id}')">
            ${currentLanguage === 'ar' ? 'عرض الدليل الشامل ←' : 'Explore Guide →'}
          </button>
        </div>
      </div>
    </div>
  `).join('');
  requestPageTranslation();
}

// Render Explore Grid
function renderExploreGrid(filterCategory = exploreCategory, searchQuery = exploreSearch) {
  const container = document.getElementById('explore-grid');
  if (!container) return;

  exploreCategory = filterCategory;
  exploreSearch = searchQuery;
  const filtered = PLACES.filter(place => {
    const matchCategory = filterCategory === 'all' ||
      (filterCategory === 'hidden-gems' ? place.hiddenGem : place.categories.includes(filterCategory));
    const searchableText = `${place.name} ${place.desc} ${place.location} ${place.category}`.toLowerCase();
    return matchCategory && searchableText.includes(searchQuery.toLowerCase()) && !dismissedExplorePlaces.has(place.id);
  });
  const visible = filtered.slice(0, exploreVisibleCount);

  container.innerHTML = visible.map(p => `
    <article class="card explore-card">
      <div class="card-img-wrap">
        <img src="${p.image}" ${imageFallbackAttribute(p)} alt="${p.name}" loading="lazy">
        <span class="card-badge">${p.subCategory || p.category}</span>
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${currentLanguage === 'ar' ? p.nameAr : p.name}</h3>
          <p class="card-desc">${currentLanguage === 'ar' ? p.descAr : p.desc}</p>
          <dl class="explore-card-details">
            <div><dt>Category</dt><dd>${p.subCategory || p.category}</dd></div>
            <div><dt>Best Season</dt><dd>${p.season}</dd></div>
            <div><dt>Advice Before Visiting</dt><dd>${p.advice[0]}</dd></div>
            <div><dt>Time to Spend</dt><dd>${p.duration}</dd></div>
          </dl>
        </div>
        <div class="card-footer">
          <button class="link-arrow" onclick="openPlaceModal('${p.id}')">
            ${currentLanguage === 'ar' ? 'اعرف المزيد ←' : 'Learn More →'}
          </button>
          <span class="saved-in-trip ${savedPlaces.includes(p.id) ? 'is-saved' : ''}">${savedPlaces.includes(p.id) ? 'Saved in Trip' : 'Not saved'}</span>
        </div>
      </div>
    </article>
  `).join('');

  const loadMore = document.getElementById('explore-load-more');
  if (loadMore) loadMore.hidden = visible.length >= filtered.length;
  const emptyState = document.getElementById('explore-empty');
  if (emptyState) emptyState.hidden = filtered.length > 0;
  requestPageTranslation();
}

async function toggleFavorite(placeId) {
  if (!firebaseState.user) {
    requireAuth('save this favorite');
    return;
  }

  const currentFavorite = favoritePlaces.has(placeId);
  if (currentFavorite) {
    favoritePlaces.delete(placeId);
  } else {
    favoritePlaces.add(placeId);
  }

  if (!isFirebaseAvailable()) {
    renderExploreGrid();
    updateActivePinCard();
    return;
  }

  const favoriteRef = firebaseState.db.collection('users').doc(firebaseState.user.uid).collection('favorites').doc(placeId);
  try {
    if (currentFavorite) {
      await favoriteRef.delete();
      showToast('Favorite removed.', 'info');
    } else {
      await favoriteRef.set({
        placeId,
        savedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
      showToast('Favorite saved to your account.', 'success');
    }
    await loadUserData(firebaseState.user.uid);
  } catch (error) {
    showToast(getFriendlyErrorMessage(error, 'Unable to update this favorite right now.'), 'error');
  }
  renderExploreGrid();
  updateActivePinCard();
}

function dismissExploreCard(placeId) {
  dismissedExplorePlaces.add(placeId);
  renderExploreGrid();
}

function loadMoreExplorePlaces() {
  exploreVisibleCount += 6;
  renderExploreGrid();
}

function calculateDriveMinutes(from, to) {
  const radians = degrees => degrees * Math.PI / 180;
  const [fromLat, fromLon] = from;
  const [toLat, toLon] = to;
  const latDelta = radians(toLat - fromLat);
  const lonDelta = radians(toLon - fromLon);
  const a = Math.sin(latDelta / 2) ** 2 + Math.cos(radians(fromLat)) * Math.cos(radians(toLat)) * Math.sin(lonDelta / 2) ** 2;
  const roadDistanceKm = 6371 * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * 1.22;
  if (roadDistanceKm < 10) return 15;
  return Math.ceil((roadDistanceKm / 68 * 60) / 5) * 5;
}

const TRIP_BUDGETS = {
  budget: { label: 'Budget', minPerDay: 45, maxPerDay: 85 },
  balanced: { label: 'Balanced', minPerDay: 90, maxPerDay: 160 },
  comfort: { label: 'Comfort', minPerDay: 180, maxPerDay: 320 }
};

function getPlaceActivity(place) {
  if (place.categories.includes('history')) return `Explore ${place.name} with time for the site museum or a local guide.`;
  if (place.categories.includes('adventure')) return `Take a guided trail or outdoor excursion at ${place.name}; check seasonal access.`;
  if (place.categories.includes('food')) return `Sample regional dishes and browse local vendors around ${place.name}.`;
  if (place.categories.includes('relaxation') || place.categories.includes('medical')) return `Set aside unhurried time for bathing or wellness at ${place.name}.`;
  return `Walk the landscape and visitor trails around ${place.name}, with breaks for viewpoints.`;
}

function getTravelLabel(minutes) {
  if (!minutes) return 'Local transfers';
  const hours = Math.floor(minutes / 60);
  const remainder = minutes % 60;
  return `${hours ? `${hours} hr ` : ''}${remainder ? `${remainder} min` : ''}`;
}

function generateItinerary() {
  const daysInput = document.getElementById('trip-custom-days');
  const requestedDays = Number(daysInput?.value || itineraryDays);
  if (!Number.isInteger(requestedDays) || requestedDays < 1 || requestedDays > 30) {
    showToast('Choose a trip length from 1 to 30 days.', 'error');
    daysInput?.focus();
    return;
  }
  itineraryDays = requestedDays;

  const relevantCategories = new Set(itineraryInterests);
  if (relevantCategories.has('culture')) relevantCategories.add('history');
  if (relevantCategories.has('photography')) ['history', 'nature', 'adventure'].forEach(category => relevantCategories.add(category));
  if (relevantCategories.has('family')) ['history', 'nature', 'food', 'relaxation'].forEach(category => relevantCategories.add(category));
  const budget = TRIP_BUDGETS[itineraryBudget] || TRIP_BUDGETS.balanced;
  const rankedPlaces = PLACES.map((place, index) => {
    const categories = new Set([place.category, ...place.categories]);
    let score = relevantCategories.size ? [...relevantCategories].filter(category => categories.has(category)).length * 10 : 1;
    if (itineraryBudget === 'budget' && ['history', 'nature', 'food'].some(category => categories.has(category))) score += 2;
    if (itineraryBudget === 'comfort' && ['relaxation', 'medical', 'food'].some(category => categories.has(category))) score += 2;
    return { place, score, index };
  }).sort((a, b) => b.score - a.score || a.index - b.index);
  const candidates = rankedPlaces.filter(item => item.score > 0).map(item => item.place);
  const places = candidates.length ? candidates : PLACES;
  const notesByType = {
    solo: 'Keep transfers flexible and consider a licensed guide for remote trails.',
    couple: 'Leave room for relaxed meals and scenic stops.',
    family: 'Plan shade and water breaks, and confirm age requirements for activities.',
    group: 'Agree on meeting points and confirm group availability before travel.'
  };
  let previousGeo = [31.953, 35.930];

  const itinerary = Array.from({ length: itineraryDays }, (_, index) => {
    const place = places[index % places.length];
    const travelTime = getTravelLabel(calculateDriveMinutes(previousGeo, place.geo));
    previousGeo = place.geo;
    return {
      day: index + 1,
      placeId: place.id,
      destination: place.name,
      activities: [getPlaceActivity(place)],
      travelTime,
      notes: notesByType[itineraryTravelerType] || 'Choose a comfortable pace and check local opening times before traveling.',
      image: place.image
    };
  });

  const estimatedCost = {
    min: itineraryDays * budget.minPerDay,
    max: itineraryDays * budget.maxPerDay
  };
  currentTripPlan = {
    duration: itineraryDays,
    interests: Array.from(itineraryInterests),
    destinations: itinerary.map(entry => entry.placeId),
    travelerType: itineraryTravelerType || 'flexible',
    budget: itineraryBudget || 'balanced',
    budgetLabel: budget.label,
    estimatedCost,
    itinerary,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  itineraryEditMode = false;
  document.querySelectorAll('[data-trip-days]').forEach(button => {
    const selected = Number(button.dataset.tripDays) === itineraryDays;
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  const durationLabel = document.getElementById('trip-duration-label');
  if (durationLabel) durationLabel.textContent = `Duration: ${itineraryDays} Days`;
  renderGeneratedItinerary();
  const resultActions = document.getElementById('itinerary-result-actions');
  if (resultActions) resultActions.hidden = false;
  const editButton = document.getElementById('edit-itinerary');
  if (editButton) editButton.textContent = 'Edit';
  const title = document.getElementById('itinerary-title');
  if (title) title.textContent = `Your ${itineraryDays}-Day Jordan Itinerary`;
  const estimate = document.getElementById('itinerary-estimate');
  if (estimate) {
    estimate.textContent = `${budget.label} estimate: $${estimatedCost.min.toLocaleString()}–$${estimatedCost.max.toLocaleString()} per traveler for ${itineraryDays} days, excluding flights and booked experiences.`;
    estimate.hidden = false;
  }
}

function renderGeneratedItinerary() {
  const container = document.getElementById('itinerary-results');
  if (!container || !currentTripPlan?.itinerary?.length) return;
  container.innerHTML = currentTripPlan.itinerary.map((entry, index) => {
    const place = PLACES.find(item => item.id === entry.placeId);
    if (!place) return '';
    const editor = itineraryEditMode ? `<div class="itinerary-edit-controls">
      <label class="sr-only" for="itinerary-place-${index}">Day ${index + 1} destination</label>
      <select id="itinerary-place-${index}" data-itinerary-place="${index}" class="search-input">${PLACES.map(option => `<option value="${option.id}" ${option.id === entry.placeId ? 'selected' : ''}>${option.name}</option>`).join('')}</select>
      <button type="button" class="btn-outline" data-itinerary-move="up" data-itinerary-index="${index}" aria-label="Move day ${index + 1} earlier" ${index === 0 ? 'disabled' : ''}>↑</button>
      <button type="button" class="btn-outline" data-itinerary-move="down" data-itinerary-index="${index}" aria-label="Move day ${index + 1} later" ${index === currentTripPlan.itinerary.length - 1 ? 'disabled' : ''}>↓</button>
    </div>` : '';
    return `<article class="timeline-item itinerary-day-card">
      <img src="${place.image}" ${imageFallbackAttribute(place)} class="timeline-thumb" alt="${place.name}" loading="lazy">
      <div class="timeline-content">
        <span class="timeline-day">DAY ${index + 1}</span>
        <h3 class="font-serif">${place.name}</h3>
        <p>${getPlaceActivity(place)} ${entry.notes}</p>
        <span class="timeline-travel" aria-label="Estimated driving time">Estimated travel: ${entry.travelTime}</span>
        ${editor}
      </div>
    </article>`;
  }).join('');
}

function updateItineraryAfterEdit() {
  let previousGeo = [31.953, 35.930];
  currentTripPlan.itinerary.forEach((entry, index) => {
    entry.day = index + 1;
    const place = PLACES.find(item => item.id === entry.placeId);
    if (place) {
      entry.destination = place.name;
      entry.image = place.image;
      entry.activities = [getPlaceActivity(place)];
      entry.travelTime = getTravelLabel(calculateDriveMinutes(previousGeo, place.geo));
      previousGeo = place.geo;
    }
  });
  currentTripPlan.destinations = currentTripPlan.itinerary.map(entry => entry.placeId);
  currentTripPlan.updatedAt = new Date().toISOString();
  renderGeneratedItinerary();
}

// Render Local Experiences
function renderLocalGrid() {
  const container = document.getElementById('local-grid');
  if (!container) return;

  container.innerHTML = LOCAL_EXPERIENCES.map(exp => `
    <div class="card">
      <div class="card-img-wrap">
        <img src="${exp.image}" alt="${exp.title}" loading="lazy">
        <span class="card-badge">${exp.location}</span>
        <div class="local-card-actions">
          <button class="card-save-btn ${savedExperiences.has(exp.id) ? 'saved' : ''}" type="button" aria-label="${savedExperiences.has(exp.id) ? 'Remove saved experience' : 'Save experience'}: ${exp.title}" onclick="toggleExperienceSaved('${exp.id}')">♥</button>
        </div>
      </div>
      <div class="card-body">
        <div>
          <h3 class="card-title">${currentLanguage === 'ar' ? exp.titleAr : exp.title}</h3>
          <p class="card-desc">${exp.desc}</p>
        </div>
        <div class="card-footer" style="margin-bottom: 0.75rem;">
          <span style="font-size: 0.75rem; color: #78716C;">⏱ ${exp.duration}</span>
          <span style="font-weight: 700; font-size: 1rem;">$${exp.price}</span>
        </div>
        <button class="btn-primary" style="width: 100%; justify-content: center; padding: 8px 16px; font-size: 0.75rem;" onclick="openBookingModal('${exp.id}')">
          ${currentLanguage === 'ar' ? 'حجز التجربة' : 'Book Experience'}
        </button>
      </div>
    </div>
  `).join('');
  requestPageTranslation();
}

function toggleExperienceSaved(id) {
  if (firebaseState.user) {
    toggleExperienceInFirestore(id, 'savedExperiences');
    return;
  }
  if (savedExperiences.has(id)) {
    savedExperiences.delete(id);
    showToast('Experience removed from your saved list.', 'info');
  } else {
    savedExperiences.add(id);
    showToast('Experience saved to your plan.', 'success');
  }
  writeLocalData('darbak-saved-experiences', [...savedExperiences]);
  renderLocalGrid();
}

function toggleExperienceFavorite(id) {
  if (firebaseState.user) {
    toggleExperienceInFirestore(id, 'favoriteExperiences');
    return;
  }
  if (favoriteExperiences.has(id)) favoriteExperiences.delete(id);
  else favoriteExperiences.add(id);
  renderLocalGrid();
}

const MAP_CATEGORY_INFO = {
  history: { icon: '🏛️', label: 'History' },
  nature: { icon: '🌿', label: 'Nature' },
  food: { icon: '🍽️', label: 'Food' },
  relaxation: { icon: '♨️', label: 'Wellness' },
  adventure: { icon: '🥾', label: 'Adventure' },
  medical: { icon: '⚕️', label: 'Wellness' },
  events: { icon: '🎭', label: 'Events' },
  popular: { icon: '📍', label: 'Popular place' }
};

function getMapPlaceById(id) {
  return PLACES.find(place => place.id === id) || CITY_MAP_PLACES.find(place => place.id === id);
}

function getPlaceFeatureCategories(place) {
  return [...new Set([place.category, ...(place.categories || [])])]
    .filter(category => MAP_CATEGORY_INFO[category]);
}

function createMapMarkerIcon(place) {
  const category = MAP_CATEGORY_INFO[place.category] || { icon: '📍', label: 'Place' };
  const isActive = place.id === activeMapPinId;
  return L.divIcon({
    className: 'jmap-div-icon',
    html: `<span class="jmap-marker category-${place.category} ${isActive ? 'active' : ''}" role="img" aria-label="${place.name}"><img src="${place.image}" ${imageFallbackAttribute(place)} alt=""></span>`,
    iconSize: [42, 42],
    iconAnchor: [21, 21]
  });
}

function initializeJordanMap(canvas) {
  if (jordanMap || !window.L) return;
  jordanMap = L.map(canvas, {
    zoomControl: true,
    scrollWheelZoom: true,
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    wheelDebounceTime: 60,
    wheelPxPerZoomLevel: 120,
    inertia: true,
    inertiaDeceleration: 1800,
    easeLinearity: 0.2,
    zoomAnimation: true,
    fadeAnimation: true,
    markerZoomAnimation: true,
    minZoom: 6,
    maxZoom: 18
  })
    .setView([31.2, 36.15], 7.5);
  jordanTileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(jordanMap);
  jordanMapMarkers = L.layerGroup().addTo(jordanMap);
  jordanTileLayer.on('tileerror', () => {
    const status = document.getElementById('map-status');
    if (status) status.textContent = 'Street map tiles could not load. Check your internet connection.';
  });
  jordanTileLayer.on('tileload', () => {
    const status = document.getElementById('map-status');
    if (status?.textContent.startsWith('Street map tiles')) status.textContent = '';
  });
}

// Render Map Pins
function renderMapPins() {
  const canvas = document.getElementById('jmap-canvas');
  if (!canvas) return;

  const visiblePlaces = getVisibleMapPlaces();
  renderTrendingPlaces(visiblePlaces);
  if (activeView !== 'jmap') {
    updateActivePinCard();
    return;
  }
  if (!window.L) {
    canvas.innerHTML = '<p class="map-load-message">The street map could not load. Check your internet connection and refresh.</p>';
    const status = document.getElementById('map-status');
    if (status) status.textContent = 'Map library unavailable.';
    updateActivePinCard();
    return;
  }
  initializeJordanMap(canvas);
  if (!jordanMapMarkers) return;

  if (!visiblePlaces.some(place => place.id === activeMapPinId)) activeMapPinId = visiblePlaces[0]?.id || null;
  jordanMapMarkers.clearLayers();
  visiblePlaces.forEach(place => {
    const category = MAP_CATEGORY_INFO[place.category] || { icon: '📍', label: 'Place' };
    const marker = L.marker(place.geo, {
      icon: createMapMarkerIcon(place),
      title: `${place.name} · ${category.label}`,
      alt: `${place.name}, ${category.label}`,
      keyboard: true,
      placeId: place.id
    }).addTo(jordanMapMarkers);
    marker.bindTooltip(place.name, { direction: 'top', offset: [0, -18] });
    marker.on('click', () => selectMapPin(place.id));
  });
  updateActivePinCard();
  requestAnimationFrame(() => jordanMap?.invalidateSize());
  requestPageTranslation();
}

function selectMapPin(id) {
  activeMapPinId = id;
  const place = getMapPlaceById(id);
  updateActivePinCard();
  jordanMapMarkers?.eachLayer(marker => {
    const markerPlace = getMapPlaceById(marker.options.placeId);
    if (markerPlace) marker.setIcon(createMapMarkerIcon(markerPlace));
  });
  if (place && jordanMap) {
    const targetZoom = Math.max(jordanMap.getZoom(), 12);
    jordanMap.flyTo(place.geo, targetZoom, { duration: 0.8 });
  }
}

function getVisibleMapPlaces() {
  let places = [...PLACES, ...CITY_MAP_PLACES].filter(place => mapCategory === 'all' || place.categories.includes(mapCategory));
  if (mapSearch) {
    const query = mapSearch.toLowerCase();
    places = places.filter(place => `${place.name} ${place.location} ${place.desc}`.toLowerCase().includes(query));
  }
  if (mapFilterMode === 'near-amman') {
    places = places.filter(place => calculateDriveMinutes([31.953, 35.930], place.geo) <= 75);
  } else if (mapFilterMode === 'near-me' && visitorCoordinates) {
    places = places.filter(place => calculateDriveMinutes(visitorCoordinates, place.geo) <= 120);
  } else if (mapFilterMode === 'trending') {
    places = [...places].sort((a, b) => (b.rating * (b.reviews || 1)) - (a.rating * (a.reviews || 1)));
  }
  return places;
}

function renderTrendingPlaces(places = getVisibleMapPlaces()) {
  const container = document.getElementById('map-trending-list');
  if (!container) return;
  const heading = document.getElementById('map-trending-heading');
  if (heading) heading.textContent = mapFilterMode === 'near-amman' ? 'Places Near Amman' : mapFilterMode === 'near-me' ? 'Places Near You' : mapFilterMode === 'trending' ? 'Most Visited' : 'Jordan Highlights';
  container.innerHTML = places.slice(0, 5).map(place => `<button class="map-list-item" type="button" onclick="selectMapPin('${place.id}')">
    <img src="${place.image}" ${imageFallbackAttribute(place)} alt="" loading="lazy"><span><strong>${place.name}</strong><small>${place.location} · ${place.duration}</small></span>
  </button>`).join('') || '<p class="empty-state">No locations match these filters.</p>';
}

function updateActivePinCard() {
  const card = document.getElementById('active-pin-card');
  if (!card) return;
  const p = getMapPlaceById(activeMapPinId);
  if (!p) {
    card.hidden = true;
    return;
  }
  card.hidden = false;
  const features = getPlaceFeatureCategories(p).map(category => {
    const feature = MAP_CATEGORY_INFO[category];
    return `<span class="map-feature-chip"><i aria-hidden="true">${feature.icon}</i>${feature.label}</span>`;
  }).join('');

  card.innerHTML = `
    <button class="map-card-close" type="button" aria-label="Close destination details" onclick="document.getElementById('active-pin-card').hidden = true">×</button>
    <img src="${p.image}" ${imageFallbackAttribute(p)} alt="${p.name}" class="active-pin-img">
    <div class="active-pin-content">
      <div style="font-size: 0.65rem; font-weight: 700; color: #B84B39; text-transform: uppercase;">
        ${p.type.toUpperCase()} · ACTIVE PIN
      </div>
      <h4 style="font-family: var(--font-serif); font-size: 1rem; margin: 4px 0;">${p.name}</h4>
      <div class="map-feature-chips" aria-label="Place features">${features}</div>
      <p style="font-size: 0.75rem; color: #78716C; margin-bottom: 6px;">${p.desc}</p>
      <div class="advice-badge">
        <strong>Best Season:</strong> ${p.season}
      </div>
      <div style="font-size: 0.72rem; color: #57534E; margin-bottom: 10px;">
        <strong>Advice:</strong> ${p.advice[0]}
      </div>
      ${p.type === 'city' ? '' : `<div class="map-card-actions">
        <button class="btn-primary" type="button" onclick="toggleSave('${p.id}')">${savedPlaces.includes(p.id) ? '✓ Saved in Trip' : '+ Save in Trip'}</button>
        <button class="btn-outline" type="button" aria-pressed="${favoritePlaces.has(p.id)}" onclick="toggleFavorite('${p.id}'); updateActivePinCard()">${favoritePlaces.has(p.id) ? '★ Favorite' : '☆ Favorite'}</button>
      </div>`}
    </div>
  `;
}

function renderJordanCities() {
  const container = document.getElementById('jordan-cities-grid');
  if (!container) return;
  container.innerHTML = JORDAN_CITIES.map(city => `
    <button type="button" class="jordan-city-card" aria-pressed="false" onclick="selectJordanCity('${city.id}')">
      <img src="${city.image}" alt="" loading="lazy">
      <span class="jordan-city-card-copy"><strong>${city.name}</strong><small>${city.governorate} Governorate</small><span>${city.desc}</span></span>
    </button>
  `).join('');
}

function selectJordanCity(cityId) {
  const city = JORDAN_CITIES.find(item => item.id === cityId);
  const panel = document.getElementById('jordan-city-details');
  if (!city || !panel) return;
  document.querySelectorAll('.jordan-city-card').forEach(card => {
    const selected = card.getAttribute('onclick') === `selectJordanCity('${cityId}')`;
    card.classList.toggle('active', selected);
    card.setAttribute('aria-pressed', String(selected));
  });
  panel.innerHTML = `
    <img src="${city.image}" alt="">
    <div class="city-detail-copy"><span class="kicker">${city.governorate} Governorate</span><h4 class="font-serif">${city.name} <span lang="ar" dir="rtl">${city.nameAr}</span></h4><p>${city.info}</p><p class="city-detail-highlight"><strong>Nearby highlight:</strong> ${city.highlight}</p><button type="button" class="btn-primary" onclick="showJordanCityOnMap('${city.id}')">See ${city.name} on JMap</button></div>
  `;
  panel.hidden = false;
  panel.focus({ preventScroll: true });
}

function showJordanCityOnMap(cityId) {
  const mapPlace = CITY_MAP_PLACES.find(place => place.id === `city-${cityId}`);
  if (!mapPlace) return;
  activeMapPinId = mapPlace.id;
  mapCategory = 'all';
  mapFilterMode = 'all';
  mapSearch = '';
  const search = document.getElementById('jmap-search');
  if (search) search.value = '';
  document.querySelectorAll('[data-map-category]').forEach(button => {
    const selected = button.dataset.mapCategory === 'all';
    button.classList.toggle('active', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
  showView('jmap');
  requestAnimationFrame(() => jordanMap?.setView(mapPlace.geo, 11, { animate: true }));
}

function speakArabicWord(text) {
  const status = document.getElementById('pronunciation-status');
  if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
    if (status) status.textContent = 'Arabic audio is not supported by this browser.';
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'ar-JO';
  const arabicVoice = window.speechSynthesis.getVoices().find(voice => /^ar(-|$)/i.test(voice.lang));
  if (arabicVoice) utterance.voice = arabicVoice;
  if (status) status.textContent = arabicVoice ? 'Playing Arabic pronunciation.' : 'Playing with the available voice. Install an Arabic speech voice for best pronunciation.';
  window.speechSynthesis.speak(utterance);
}

// Toggle Save
async function toggleSave(placeId) {
  const alreadySaved = savedPlaces.includes(placeId);
  if (!firebaseState.user || !firebaseState.db) {
    savedPlaces = alreadySaved
      ? savedPlaces.filter(id => id !== placeId)
      : [...savedPlaces, placeId];
    localStorage.setItem('darbak-saved-places', JSON.stringify(savedPlaces));
    showToast(alreadySaved ? 'Destination removed from My Trip.' : 'Destination saved to My Trip.', alreadySaved ? 'info' : 'success');
  } else {
    try {
      if (alreadySaved) {
        await removePlaceFromFirestore(placeId);
        showToast('Destination removed from My Trip.', 'info');
      } else {
        await savePlaceToFirestore(placeId);
        showToast('Destination saved to My Trip.', 'success');
      }
    } catch (error) {
      showToast(getFriendlyErrorMessage(error, 'Unable to update this destination right now.'), 'error');
    }
  }

  updateSavedCount();
  renderWonders();
  renderExploreGrid();
  updateActivePinCard();
  renderCalendar(2026, 9);
}

function updateSavedCount() {
  const counter = document.getElementById('saved-count');
  if (counter) counter.textContent = savedPlaces.length;
}

function showToast(message, tone = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${tone}`;
  toast.textContent = message;
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));
  window.setTimeout(() => {
    toast.classList.remove('show');
    window.setTimeout(() => toast.remove(), 260);
  }, 2600);
}

// Render Calendar
function renderCalendar(year, month) {
  const grid = document.getElementById('calendar-grid');
  if (!grid) return;

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  let html = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    .map(day => `<span class="calendar-weekday" aria-hidden="true">${day}</span>`).join('');
  for (let i = 0; i < firstDay; i++) {
    html += '<span class="calendar-empty" aria-hidden="true"></span>';
  }

  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
    const isSelected = selectedCalendarDate === dateStr;
    const hasItems = (scheduledPlaces[dateStr] || []).some(id => savedPlaces.includes(id));

    html += `
      <button type="button" class="cal-day-cell ${isSelected ? 'active' : ''} ${hasItems ? 'has-item' : ''}"
           aria-label="Select ${new Date(year, month, d).toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' })}${hasItems ? ', itinerary planned' : ''}" aria-pressed="${isSelected}"
           onclick="selectDate('${dateStr}')">
        ${d}
      </button>
    `;
  }

  grid.innerHTML = html;
  renderSavedList();
}

function selectDate(dateStr) {
  selectedCalendarDate = dateStr;
  renderCalendar(2026, 9);
}

function renderSavedList() {
  const container = document.getElementById('saved-items-list');
  renderSelectedDay();
  if (!container) return;

  const savedItems = PLACES.filter(p => savedPlaces.includes(p.id));
  if (savedItems.length === 0) {
    container.innerHTML = '<p style="font-size: 0.8rem; color: #78716C; text-align: center; padding: 2rem;">No saved places yet.</p>';
    renderSavedTripDetails();
    return;
  }

  container.innerHTML = savedItems.map(p => `
    <div class="saved-place-row">
      <div class="saved-place-info">
        <img src="${p.image}" alt="${p.name}" class="saved-place-thumb">
        <div>
          <h4>${p.name}</h4>
          <span>${p.location}</span>
        </div>
      </div>
      <div class="saved-place-actions">
        <button type="button" onclick="schedulePlace('${p.id}')">Schedule this day</button>
        <button type="button" class="saved-remove" onclick="toggleSave('${p.id}')">Remove</button>
      </div>
    </div>
  `).join('');
  renderSavedTripDetails();
}

function renderSavedTripDetails() {
  const overview = document.getElementById('trip-overview-content');
  const bookings = document.getElementById('booked-experiences-list');
  const bookingTotal = bookedExperiences.reduce((total, booking) => total + Number(booking.totalPrice || 0), 0);
  const planEstimateMin = Number(currentTripPlan?.estimatedCost?.min || 0);
  const planEstimateMax = Number(currentTripPlan?.estimatedCost?.max || 0);
  const totalEstimateMin = bookingTotal + planEstimateMin;
  const totalEstimateMax = bookingTotal + planEstimateMax;
  const estimateLabel = totalEstimateMax ? `$${totalEstimateMin.toLocaleString()}–$${totalEstimateMax.toLocaleString()}` : 'Add a plan or booking';
  const savedItinerary = currentTripPlan?.itinerary?.length ? `<section class="saved-itinerary-summary" aria-label="Saved itinerary days">
    <h3>${currentTripPlan.duration}-Day Itinerary</h3>
    <ol>${currentTripPlan.itinerary.map((entry, index) => {
      const place = PLACES.find(item => item.id === entry.placeId);
      return `<li><strong>Day ${index + 1}: ${place?.name || entry.destination}</strong><span>${entry.activities?.[0] || ''}</span><small>Estimated travel: ${entry.travelTime || 'Not available'}</small></li>`;
    }).join('')}</ol>
  </section>` : '';

  if (overview) {
    overview.innerHTML = `<div class="trip-overview-metrics">
      <div><span>Saved places</span><strong>${savedPlaces.length}</strong></div>
      <div><span>Itinerary</span><strong>${currentTripPlan ? `${currentTripPlan.duration} days` : 'Not saved'}</strong></div>
      <div><span>Booked experiences</span><strong>${bookedExperiences.length}</strong></div>
      <div><span>Estimated total</span><strong>${estimateLabel}</strong></div>
    </div>
    ${currentTripPlan?.budgetLabel ? `<p class="trip-overview-note">${currentTripPlan.budgetLabel} estimate for one traveler, plus booked experience costs.</p>` : '<p class="trip-overview-note">Estimates are planning guides, not live quotes.</p>'}
    ${savedItinerary}`;
  }

  if (!bookings) return;
  if (!bookedExperiences.length) {
    bookings.innerHTML = '<p class="trip-empty-note">No local experiences booked yet.</p>';
    return;
  }

  bookings.innerHTML = bookedExperiences.map(booking => {
    const experience = LOCAL_EXPERIENCES.find(item => item.id === booking.experienceId);
    if (!experience) return '';
    return `<article class="booked-experience-row">
      <img src="${experience.image}" alt="" loading="lazy">
      <div><h3>${experience.title}</h3><p>${experience.location} · ${booking.preferredDate} · ${booking.guests} guest${booking.guests === 1 ? '' : 's'}</p><small>Request saved · not confirmed${booking.contactName ? ` · ${booking.contactName}` : ''}${booking.notes ? ` · Note: ${booking.notes}` : ''}</small></div>
      <strong>$${Number(booking.totalPrice || 0).toLocaleString()}</strong>
      <button type="button" class="saved-remove" aria-label="Remove booking for ${experience.title}" onclick="removeBookedExperience('${booking.id}')">Remove</button>
    </article>`;
  }).join('');
}

function removeBookedExperience(bookingId) {
  bookedExperiences = bookedExperiences.filter(booking => booking.id !== bookingId);
  writeLocalData('darbak-booked-experiences', bookedExperiences);
  renderSavedTripDetails();
}

function renderSelectedDay() {
  const container = document.getElementById('selected-day-items');
  const label = document.getElementById('selected-day-label');
  if (!container) return;

  const date = new Date(`${selectedCalendarDate}T12:00:00`);
  if (label) label.textContent = date.toLocaleDateString('en', { weekday: 'long', month: 'long', day: 'numeric' });
  const placesForDay = (scheduledPlaces[selectedCalendarDate] || [])
    .filter(id => savedPlaces.includes(id))
    .map(id => PLACES.find(place => place.id === id))
    .filter(Boolean);

  if (!placesForDay.length) {
    container.innerHTML = '<p class="empty-day-message">Nothing planned yet. Choose a saved destination below to add it to this day.</p>';
    return;
  }

  container.innerHTML = placesForDay.map(place => `
    <article class="planned-place-card">
      <img src="${place.image}" ${imageFallbackAttribute(place)} alt="${place.name}">
      <div class="planned-place-copy"><span>${place.location}</span><h4>${place.name}</h4><p>${place.duration}</p></div>
      <button type="button" class="btn-outline notification-button" onclick="sendItineraryNotification('${place.id}')">Send me a notification</button>
    </article>
  `).join('');
}

function schedulePlace(placeId) {
  Object.keys(scheduledPlaces).forEach(date => {
    scheduledPlaces[date] = scheduledPlaces[date].filter(id => id !== placeId);
  });
  scheduledPlaces[selectedCalendarDate] ||= [];
  scheduledPlaces[selectedCalendarDate].push(placeId);
  renderCalendar(2026, 9);
}

async function sendItineraryNotification(placeId) {
  const place = PLACES.find(item => item.id === placeId);
  if (!place) return;
  if (!('Notification' in window)) {
    showToast('Browser notifications are not available here.', 'info');
    return;
  }
  if (!window.isSecureContext) {
    showToast('Notifications work on localhost or HTTPS. This preview is still local-only.', 'info');
    return;
  }
  let permission = Notification.permission;
  if (permission === 'default') permission = await Notification.requestPermission();
  if (permission === 'granted') {
    new Notification('Darbak trip reminder', {
      body: `${place.name} is planned for ${new Date(`${selectedCalendarDate}T12:00:00`).toLocaleDateString('en', { month: 'long', day: 'numeric' })}.`,
      icon: place.image
    });
    showToast(`Reminder created for ${place.name}.`, 'success');
  } else {
    showToast('Notifications are blocked in your browser settings.', 'info');
  }
}

// Modals
function openPlaceModal(placeId) {
  const p = PLACES.find(item => item.id === placeId);
  if (!p) return;

  const modal = document.getElementById('place-modal');
  const body = document.getElementById('place-modal-body');
  if (!modal || !body) return;

  body.innerHTML = `
    <img src="${p.image}" ${imageFallbackAttribute(p)} alt="${p.name}" style="width: 100%; aspect-ratio: 16/9; object-fit: cover;">
    <div style="padding: 1.5rem;">
      <span style="font-size: 0.7rem; font-weight: 700; color: #B84B39; text-transform: uppercase;">${p.subCategory || p.category}</span>
      <h2 id="place-modal-title" style="font-family: var(--font-serif); font-size: 1.5rem; margin: 4px 0 10px;">${p.name}</h2>
      <p style="font-size: 0.85rem; color: #57534E; line-height: 1.6; margin-bottom: 1rem;">${p.longDesc}</p>
      <div class="advice-badge" style="margin-bottom: 1rem;">
        <strong>Best Season:</strong> ${p.season}
      </div>
      <div style="font-size: 0.8rem; margin-bottom: 1.5rem;">
        <strong>Advices Before Visiting:</strong>
        <ul style="margin-top: 6px; padding-left: 20px; color: #78716C;">
          ${p.advice.map(a => `<li>${a}</li>`).join('')}
        </ul>
      </div>
      <button class="btn-primary" style="width: 100%; justify-content: center;" onclick="toggleSave('${p.id}'); closeModal('place-modal');">
        ${savedPlaces.includes(p.id) ? 'Saved in Trip' : 'Save to My Trip'}
      </button>
    </div>
  `;

  lastFocusedElement = document.activeElement;
  modal.classList.add('open');
  modal.querySelector('.modal-close')?.focus();
}

function openBookingModal(expId) {
  const exp = LOCAL_EXPERIENCES.find(e => e.id === expId);
  if (!exp) return;
  const modal = document.getElementById('booking-modal');
  const experienceInput = document.getElementById('booking-experience-id');
  if (!modal) return;
  if (experienceInput) experienceInput.value = exp.id;
  const summary = document.getElementById('booking-experience-summary');
  if (summary) summary.innerHTML = `<strong>${exp.title}</strong><span>${exp.host} · ${exp.duration}</span><span>$${exp.price} per guest</span>`;
  const dateInput = document.getElementById('booking-date');
  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localDate;
    dateInput.value = localDate;
  }
  const guestsInput = document.getElementById('booking-guests');
  if (guestsInput) guestsInput.value = '2';
  updateBookingEstimate();
  lastFocusedElement = document.activeElement;
  modal.classList.add('open');
  modal.querySelector('.modal-close')?.focus();
}

function updateBookingEstimate() {
  const experience = LOCAL_EXPERIENCES.find(item => item.id === document.getElementById('booking-experience-id')?.value);
  const guests = Math.max(1, Number(document.getElementById('booking-guests')?.value || 1));
  const estimate = document.getElementById('booking-price-estimate');
  if (experience && estimate) estimate.textContent = `Estimated request total: $${experience.price * guests} for ${guests} guest${guests === 1 ? '' : 's'}.`;
}

function openAuthModal() {
  const modal = document.getElementById('auth-modal');
  if (modal) {
    lastFocusedElement = document.activeElement;
    modal.classList.add('open');
    modal.querySelector('.modal-close')?.focus();
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove('open');
  lastFocusedElement?.focus();
}

const SUPPORTED_LANGUAGES = [
  ['en', 'English'],
  ['ar', 'العربية']
];

function setLanguage(language, persist = true) {
  if (!SUPPORTED_LANGUAGES.some(([code]) => code === language)) return;
  currentLanguage = language;
  const rtl = language === 'ar';
  const accessibility = JSON.parse(localStorage.getItem('darbak-accessibility') || '{}');
  document.documentElement.dir = accessibility.direction === false ? 'ltr' : rtl ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
  const label = document.getElementById('lang-label');
  if (label) label.textContent = SUPPORTED_LANGUAGES.find(([code]) => code === language)?.[1] || 'English';
  if (persist) localStorage.setItem('darbak-language', language);
  closeLanguageMenu();
  renderWonders();
  renderExploreGrid();
  renderLocalGrid();
  renderMapPins();
}

function applySavedLanguage() {
  const language = localStorage.getItem('darbak-language') || 'en';
  setLanguage(language, false);
}

function requestPageTranslation() {
  return;
}

function loadTranslationWidget() {
  return;
}

function openLanguageMenu() {
  const menu = document.getElementById('language-menu');
  const button = document.getElementById('btn-lang');
  if (!menu || !button) return;
  menu.hidden = false;
  button.setAttribute('aria-expanded', 'true');
  menu.querySelector(`[data-language="${currentLanguage}"]`)?.focus();
}

function closeLanguageMenu() {
  const menu = document.getElementById('language-menu');
  const button = document.getElementById('btn-lang');
  if (menu) menu.hidden = true;
  button?.setAttribute('aria-expanded', 'false');
}

function setupAccessibility() {
  const panel = document.getElementById('accessibility-panel');
  const saved = JSON.parse(localStorage.getItem('darbak-accessibility') || '{}');
  const root = document.documentElement;
  const scale = Math.min(1.3, Math.max(0.9, saved.textScale || 1));
  root.style.fontSize = `${16 * scale}px`;
  ['contrast', 'motion', 'keyboard', 'focus', 'speech'].forEach(setting => {
    root.dataset[setting] = saved[setting] ? 'on' : 'off';
    const input = document.querySelector(`[data-accessibility="${setting}"]`);
    if (input) input.checked = Boolean(saved[setting]);
  });
  const directionToggle = document.querySelector('[data-accessibility="direction"]');
  if (directionToggle) directionToggle.checked = saved.direction !== false;

  document.getElementById('btn-accessibility')?.addEventListener('click', () => {
    panel.hidden = !panel.hidden;
    document.getElementById('btn-accessibility').setAttribute('aria-expanded', String(!panel.hidden));
    if (!panel.hidden) panel.querySelector('button, input')?.focus();
  });
  panel?.querySelector('.panel-close')?.addEventListener('click', () => {
    panel.hidden = true;
    document.getElementById('btn-accessibility')?.focus();
  });
  panel?.addEventListener('change', event => {
    const control = event.target.closest('[data-accessibility]');
    if (!control) return;
    const preferences = JSON.parse(localStorage.getItem('darbak-accessibility') || '{}');
    preferences[control.dataset.accessibility] = control.checked;
    localStorage.setItem('darbak-accessibility', JSON.stringify(preferences));
    if (control.dataset.accessibility === 'direction') {
      const rtl = ['ar', 'ur'].includes(currentLanguage);
      root.dir = control.checked && rtl ? 'rtl' : 'ltr';
      return;
    }
    root.dataset[control.dataset.accessibility] = control.checked ? 'on' : 'off';
  });
  panel?.addEventListener('click', event => {
    const control = event.target.closest('[data-accessibility]');
    if (!control) return;
    if (control.dataset.accessibility === 'text-up' || control.dataset.accessibility === 'text-down') {
      const preferences = JSON.parse(localStorage.getItem('darbak-accessibility') || '{}');
      preferences.textScale = Math.min(1.3, Math.max(0.9, (preferences.textScale || 1) + (control.dataset.accessibility === 'text-up' ? 0.1 : -0.1)));
      localStorage.setItem('darbak-accessibility', JSON.stringify(preferences));
      root.style.fontSize = `${16 * preferences.textScale}px`;
    }
    if (control.dataset.accessibility === 'reset') {
      localStorage.removeItem('darbak-accessibility');
      root.style.fontSize = '';
      root.dir = ['ar', 'ur'].includes(currentLanguage) ? 'rtl' : 'ltr';
      ['contrast', 'motion', 'keyboard', 'focus', 'speech'].forEach(setting => root.dataset[setting] = 'off');
      panel.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = input.dataset.accessibility === 'direction');
    }
  });
  document.addEventListener('click', event => {
    if (root.dataset.speech !== 'on' || event.target.closest('button, input, a, select, textarea')) return;
    const text = event.target.closest('p, h1, h2, h3, h4, li')?.textContent?.trim();
    if (!text || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLanguage;
    window.speechSynthesis.speak(utterance);
  });
}

function setupEventListeners() {
  document.getElementById('btn-lang')?.addEventListener('click', () => {
    const menu = document.getElementById('language-menu');
    if (menu?.hidden) openLanguageMenu();
    else closeLanguageMenu();
  });
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => {
    const language = button.dataset.language;
    setLanguage(language);
  }));
  document.addEventListener('click', event => {
    if (!event.target.closest('#btn-lang, #language-menu')) closeLanguageMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const openModal = document.querySelector('.modal-overlay.open');
      if (openModal) closeModal(openModal.id);
      closeLanguageMenu();
      const panel = document.getElementById('accessibility-panel');
      if (panel && !panel.hidden) {
        panel.hidden = true;
        document.getElementById('btn-accessibility')?.setAttribute('aria-expanded', 'false');
        document.getElementById('btn-accessibility')?.focus();
      }
      const nav = document.querySelector('.nav-links');
      if (nav?.classList.contains('open')) {
        nav.classList.remove('open');
        document.getElementById('mobile-nav-toggle')?.setAttribute('aria-expanded', 'false');
      }
    }
    const dialog = document.querySelector('.modal-overlay.open');
    if (event.key === 'Tab' && dialog) {
      const focusable = [...dialog.querySelectorAll('button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [href]')];
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }
  });
  document.getElementById('btn-login-header')?.addEventListener('click', async () => {
    if (firebaseState.user) {
      try {
        await firebaseState.auth.signOut();
        showToast('Signed out successfully.', 'info');
      } catch (error) {
        showToast(getFriendlyErrorMessage(error, 'Unable to sign out right now.'), 'error');
      }
      return;
    }
    openAuthModal();
  });
  document.getElementById('btn-saved-header')?.addEventListener('click', () => showView('saved'));

  document.querySelectorAll('[data-explore-category]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-explore-category]').forEach(tab => {
      tab.classList.toggle('active', tab === button);
      tab.setAttribute('aria-selected', String(tab === button));
    });
    exploreVisibleCount = 6;
    renderExploreGrid(button.dataset.exploreCategory, document.getElementById('explore-search')?.value || '');
  }));
  document.querySelector('.explore-filters')?.addEventListener('keydown', event => {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    const tabs = [...document.querySelectorAll('[data-explore-category]')];
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextTab = tabs[(tabs.indexOf(event.target) + direction + tabs.length) % tabs.length];
    nextTab.focus();
    nextTab.click();
  });
  document.getElementById('explore-search')?.addEventListener('input', event => {
    exploreVisibleCount = 6;
    renderExploreGrid(exploreCategory, event.target.value.trim());
  });

  document.querySelectorAll('[data-trip-days]').forEach(button => button.addEventListener('click', () => {
    itineraryDays = Number(button.dataset.tripDays);
    const daysInput = document.getElementById('trip-custom-days');
    if (daysInput) daysInput.value = String(itineraryDays);
    document.querySelectorAll('[data-trip-days]').forEach(option => {
      option.classList.toggle('active', option === button);
      option.setAttribute('aria-pressed', String(option === button));
    });
    const label = document.getElementById('trip-duration-label');
    if (label) label.textContent = `Duration: ${itineraryDays} Days`;
  }));
  document.getElementById('trip-custom-days')?.addEventListener('input', event => {
    const days = Number(event.target.value);
    if (!Number.isInteger(days) || days < 1 || days > 30) return;
    itineraryDays = days;
    document.querySelectorAll('[data-trip-days]').forEach(button => {
      const selected = Number(button.dataset.tripDays) === days;
      button.classList.toggle('active', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    const label = document.getElementById('trip-duration-label');
    if (label) label.textContent = `Duration: ${days} Days`;
  });
  document.querySelectorAll('[data-trip-interest]').forEach(button => button.addEventListener('click', () => {
    const interest = button.dataset.tripInterest;
    if (itineraryInterests.has(interest)) itineraryInterests.delete(interest);
    else itineraryInterests.add(interest);
    button.classList.toggle('active', itineraryInterests.has(interest));
    button.setAttribute('aria-pressed', String(itineraryInterests.has(interest)));
  }));
  document.querySelectorAll('[data-trip-budget]').forEach(button => button.addEventListener('click', () => {
    itineraryBudget = button.dataset.tripBudget;
    document.querySelectorAll('[data-trip-budget]').forEach(option => {
      const selected = option === button;
      option.classList.toggle('active', selected);
      option.setAttribute('aria-pressed', String(selected));
    });
  }));
  document.querySelectorAll('[data-trip-type]').forEach(button => button.addEventListener('click', () => {
    itineraryTravelerType = button.dataset.tripType;
    document.querySelectorAll('[data-trip-type]').forEach(option => {
      const selected = option === button;
      option.setAttribute('aria-pressed', String(selected));
      option.textContent = selected ? 'Selected' : 'Select';
      option.classList.toggle('btn-primary', selected);
      option.classList.toggle('btn-outline', !selected);
      option.closest('.trip-type-card')?.classList.toggle('is-selected', selected);
    });
  }));
  document.getElementById('generate-itinerary')?.addEventListener('click', generateItinerary);
  document.getElementById('edit-itinerary')?.addEventListener('click', event => {
    if (!currentTripPlan) return;
    itineraryEditMode = !itineraryEditMode;
    event.currentTarget.textContent = itineraryEditMode ? 'Done Editing' : 'Edit';
    event.currentTarget.setAttribute('aria-pressed', String(itineraryEditMode));
    renderGeneratedItinerary();
  });
  document.getElementById('save-itinerary')?.addEventListener('click', saveCurrentTripToFirestore);
  document.getElementById('itinerary-results')?.addEventListener('change', event => {
    const select = event.target.closest('[data-itinerary-place]');
    if (!select || !currentTripPlan) return;
    const place = PLACES.find(item => item.id === select.value);
    const entry = currentTripPlan.itinerary[Number(select.dataset.itineraryPlace)];
    if (!place || !entry) return;
    entry.placeId = place.id;
    updateItineraryAfterEdit();
  });
  document.getElementById('itinerary-results')?.addEventListener('click', event => {
    const moveButton = event.target.closest('[data-itinerary-move]');
    if (!moveButton || !currentTripPlan) return;
    const index = Number(moveButton.dataset.itineraryIndex);
    const offset = moveButton.dataset.itineraryMove === 'up' ? -1 : 1;
    const targetIndex = index + offset;
    if (targetIndex < 0 || targetIndex >= currentTripPlan.itinerary.length) return;
    [currentTripPlan.itinerary[index], currentTripPlan.itinerary[targetIndex]] = [currentTripPlan.itinerary[targetIndex], currentTripPlan.itinerary[index]];
    updateItineraryAfterEdit();
  });

  document.querySelectorAll('[data-about-category]').forEach(button => button.addEventListener('click', () => {
    document.querySelectorAll('[data-about-category]').forEach(tab => {
      const selected = tab === button;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
    });
    document.querySelectorAll('[data-about-panel]').forEach(panel => {
      panel.hidden = panel.dataset.aboutPanel !== button.dataset.aboutCategory;
    });
  }));
  document.querySelector('.about-category-tabs')?.addEventListener('keydown', event => {
    if (!['ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    const tabs = [...document.querySelectorAll('[data-about-category]')];
    const direction = event.key === 'ArrowRight' ? 1 : -1;
    const nextTab = tabs[(tabs.indexOf(event.target) + direction + tabs.length) % tabs.length];
    nextTab.focus();
    nextTab.click();
  });
  document.querySelectorAll('[data-pronounce-ar]').forEach(button => button.addEventListener('click', () => {
    speakArabicWord(button.dataset.pronounceAr);
  }));

  document.getElementById('jmap-search')?.addEventListener('input', event => {
    mapSearch = event.target.value.trim();
    renderMapPins();
  });
  document.querySelectorAll('[data-map-category]').forEach(button => button.addEventListener('click', () => {
    mapCategory = button.dataset.mapCategory;
    document.querySelectorAll('[data-map-category]').forEach(option => {
      option.classList.toggle('active', option === button);
      option.setAttribute('aria-pressed', String(option === button));
    });
    renderMapPins();
  }));
  document.getElementById('map-near-amman')?.addEventListener('click', () => {
    mapFilterMode = mapFilterMode === 'near-amman' ? 'all' : 'near-amman';
    renderMapPins();
  });
  document.getElementById('map-trending')?.addEventListener('click', () => {
    mapFilterMode = mapFilterMode === 'trending' ? 'all' : 'trending';
    renderMapPins();
  });
  document.getElementById('map-near-me')?.addEventListener('click', () => {
    if (!navigator.geolocation) {
      document.getElementById('map-status').textContent = 'Location is not available in this browser.';
      return;
    }
    document.getElementById('map-status').textContent = 'Requesting your location...';
    navigator.geolocation.getCurrentPosition(position => {
      visitorCoordinates = [position.coords.latitude, position.coords.longitude];
      mapFilterMode = 'near-me';
      document.getElementById('map-status').textContent = 'Showing nearby Jordan destinations.';
      renderMapPins();
    }, () => {
      document.getElementById('map-status').textContent = 'Location permission was not granted. Showing all Jordan destinations.';
      mapFilterMode = 'all';
      renderMapPins();
    }, { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 });
  });
  document.getElementById('mobile-nav-toggle')?.addEventListener('click', event => {
    const nav = document.querySelector('.nav-links');
    const expanded = event.currentTarget.getAttribute('aria-expanded') === 'true';
    event.currentTarget.setAttribute('aria-expanded', String(!expanded));
    event.currentTarget.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
    nav?.classList.toggle('open', !expanded);
  });
  document.querySelector('.nav-links')?.addEventListener('click', event => {
    if (!event.target.closest('[data-target]')) return;
    document.querySelector('.nav-links')?.classList.remove('open');
    document.getElementById('mobile-nav-toggle')?.setAttribute('aria-expanded', 'false');
  });

  document.getElementById('story-form')?.addEventListener('submit', async event => {
    event.preventDefault();
    const title = document.getElementById('story-title')?.value.trim();
    const authorInput = document.getElementById('story-author')?.value.trim();
    const content = document.getElementById('story-content')?.value.trim();

    if (!title || !authorInput || !content) {
      showToast('Please complete all story fields before submitting.', 'error');
      return;
    }

    const [displayNamePart, ...countryParts] = authorInput.split(',');
    const author = displayNamePart.trim() || 'Traveler';
    const country = countryParts.join(',').trim() || 'Jordan';

    const story = {
      id: `story-${Date.now()}`,
      title,
      author,
      country,
      location: country === 'Jordan' ? 'Jordan' : `Jordan · ${country}`,
      content,
      image: storyPhotoDataUrl,
      likes: 0,
      sample: false,
      createdAt: new Date().toISOString()
    };
    travelerStories = [story, ...travelerStories.filter(item => item.id !== story.id)];
    writeLocalData('darbak-stories', travelerStories);
    if (firebaseState.user && firebaseState.db) {
      try {
        await firebaseState.db.collection('stories').doc(story.id).set({
          title,
          author,
          country,
          location: story.location,
          content,
          image: story.image,
          userId: firebaseState.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (error) {
        showToast('Story saved on this device; cloud sync failed.', 'info');
      }
    }
    renderTravelerStories();
    event.target.reset();
    storyPhotoDataUrl = '';
    document.getElementById('story-photo-preview').hidden = true;
    showToast('Your story was added to this device.', 'success');
    showView('stories');
  });

  document.getElementById('booking-guests')?.addEventListener('input', updateBookingEstimate);
  document.getElementById('booking-form')?.addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const experienceId = document.getElementById('booking-experience-id')?.value;
    const experience = LOCAL_EXPERIENCES.find(item => item.id === experienceId);
    if (!experience) {
      showToast('Choose an experience before submitting a request.', 'error');
      return;
    }

    const guestCount = Math.max(1, Number(document.getElementById('booking-guests')?.value || 1));
    const booking = {
      id: `booking-${Date.now()}`,
      experienceId,
      preferredDate: document.getElementById('booking-date')?.value,
      guests: guestCount,
      contactName: document.getElementById('booking-contact-name')?.value.trim(),
      contactEmail: document.getElementById('booking-contact-email')?.value.trim(),
      notes: document.getElementById('booking-notes')?.value.trim(),
      totalPrice: experience.price * guestCount,
      status: 'request saved locally',
      createdAt: new Date().toISOString()
    };

    bookedExperiences.unshift(booking);
    writeLocalData('darbak-booked-experiences', bookedExperiences);
    if (firebaseState.user && firebaseState.db) {
      try {
        await firebaseState.db.collection('users').doc(firebaseState.user.uid).collection('bookingRequests').add({
          ...booking,
          userId: firebaseState.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
      } catch (error) {
        showToast('Request saved on this device; cloud sync failed.', 'info');
      }
    }
    renderSavedTripDetails();
    showToast('Experience request added to My Trip.', 'success');
    form.reset();
    closeModal('booking-modal');
  });

  document.getElementById('auth-form')?.addEventListener('submit', handleAuthSubmit);
  document.getElementById('auth-mode-toggle')?.addEventListener('click', () => {
    setAuthMode(authMode === 'signin' ? 'signup' : 'signin');
  });

  document.querySelectorAll('[data-action="save-itinerary"]').forEach(button => {
    button.addEventListener('click', async () => {
      await saveCurrentTripToFirestore();
    });
  });

  document.querySelectorAll('[data-action="booking-request"]').forEach(button => {
    button.addEventListener('click', () => {
      openBookingModal('mansaf');
      showToast('Booking request details are ready to be submitted.', 'info');
    });
  });
}
