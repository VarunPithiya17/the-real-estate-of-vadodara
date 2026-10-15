// Sample listings for the pitch demo. Interiors in img/ are the agency's own GBP photos.
const U = id => `https://images.unsplash.com/${id}?w=1600&q=80`;
const G = n => `img/gbp${n}.jpg`;
window.PROPS = [
 {id:'sky-residences',name:'Sky Residences',area:'Bhayli',type:'Apartment',bhk:3,sqft:1850,price:11500000,tag:'New launch',
  imgs:[G(3),G(1),G(4),G(5)],floor:'11th of 14',facing:'East',status:'Under construction · Dec 2027',
  desc:'A corner 3 BHK with a full-width balcony looking over the Bhayli greens. Italian-finish flooring, modular kitchen and two covered parkings.',
  amen:['Clubhouse','Infinity pool','Gym','Kids play area','24×7 security','EV charging']},
 {id:'banyan-villas',name:'The Banyan Villas',area:'Sevasi',type:'Villa',bhk:4,sqft:3400,price:24000000,tag:'Villa',
  imgs:[U('photo-1613490493576-7fde63acd811'),G(3),G(1),G(4)],floor:'G+2',facing:'North',status:'Ready to move',
  desc:'Independent 4 BHK villa on a 2,400 sq ft plot with a private garden, home theatre room and a terrace built for monsoon evenings.',
  amen:['Private garden','Home theatre','Terrace','Servant room','Gated community','Solar']},
 {id:'gotri-heights',name:'Gotri Heights',area:'Gotri',type:'Apartment',bhk:2,sqft:1250,price:7800000,tag:'Ready to move',
  imgs:[G(4),G(5),G(3),G(1)],floor:'6th of 12',facing:'West',status:'Ready to move',
  desc:'Bright 2 BHK five minutes from Gotri Road, with a fitted kitchen, wardrobes in every bedroom and a society that actually works.',
  amen:['Lift with power backup','Gym','Garden','Covered parking','CCTV']},
 {id:'trade-centre-office',name:'Trade Centre Office',area:'Vasna–Bhayli Rd',type:'Commercial',bhk:0,sqft:1100,price:9500000,tag:'Commercial',
  imgs:[U('photo-1497366216548-37526070297c'),U('photo-1497366811353-6870744d04b2'),U('photo-1486406146926-c627a92ad1ab')],floor:'4th',facing:'Road-facing',status:'Ready to move',
  desc:'Fitted office on the Vasna–Bhayli corridor — 12 workstations, a cabin, a pantry and road-facing glass for brand visibility.',
  amen:['Fitted interiors','Power backup','Visitor parking','Food court','High-speed lifts']},
 {id:'alkapuri-penthouse',name:'Alkapuri Penthouse',area:'Alkapuri',type:'Penthouse',bhk:4,sqft:4200,price:31000000,tag:'Penthouse',
  imgs:[G(1),U('photo-1600585154340-be6161a56a0c'),G(3),G(5)],floor:'Top floor (duplex)',facing:'East',status:'Ready to move',
  desc:'A duplex penthouse in central Alkapuri with a 900 sq ft private terrace. The kind of address that never comes back on the market.',
  amen:['Private terrace','Private lift','Jacuzzi','Clubhouse','Concierge']},
 {id:'sevasi-greens',name:'Sevasi Greens',area:'Sevasi',type:'Apartment',bhk:3,sqft:1650,price:8900000,tag:'Best value',
  imgs:[G(5),G(4),G(3)],floor:'3rd of 10',facing:'North-East',status:'Possession 2026',
  desc:'Spacious 3 BHK with a hall that actually fits a family — wide balconies, cross ventilation and a quiet Sevasi lane.',
  amen:['Garden','Gym','Temple','Covered parking','Rainwater harvesting']},
 {id:'race-course-showroom',name:'Race Course Showroom',area:'Race Course',type:'Commercial',bhk:0,sqft:2200,price:42000000,tag:'Prime retail',
  imgs:[U('photo-1486406146926-c627a92ad1ab'),U('photo-1497366216548-37526070297c')],floor:'Ground + mezzanine',facing:'Main road',status:'Ready to move',
  desc:'Double-height retail frontage on Race Course Road with 28 ft of glass. Built for a flagship.',
  amen:['Double height','Main-road frontage','Parking','Power backup']},
 {id:'akota-residency',name:'Akota Residency',area:'Akota',type:'Apartment',bhk:3,sqft:1950,price:13500000,tag:'Premium',
  imgs:[G(3),G(4),G(1),U('photo-1600596542815-ffad4c1539a9')],floor:'8th of 13',facing:'East',status:'Ready to move',
  desc:'Premium 3 BHK near Akota Garden — designer interiors, a TV wall feature, and a modular kitchen with chimney and hob.',
  amen:['Clubhouse','Pool','Gym','Indoor games','Party lawn']},
 {id:'bhayli-plot',name:'Bhayli Corner Plot',area:'Bhayli',type:'Plot',bhk:0,sqft:3000,price:13500000,tag:'Plot',
  imgs:[U('photo-1600596542815-ffad4c1539a9'),U('photo-1564013799919-ab600027ffc6')],floor:'—',facing:'Corner · East & North',status:'Clear title',
  desc:'NA-converted corner plot in a gated Bhayli scheme with internal roads, drainage and street lighting in place.',
  amen:['NA converted','Gated scheme','Internal roads','Clear title']}
];
window.AREAS = [
 {name:'Bhayli',img:G(3),psf:'₹4,800–6,500',vibe:'Vadodara\'s fastest-growing west — new towers, cafés and wide roads.',near:'Waves Club · Bhayli station · Vasna Rd'},
 {name:'Gotri',img:G(4),psf:'₹4,500–6,000',vibe:'Established, central and hospital-close. Families love it.',near:'GMERS hospital · Gotri lake · Sunpharma Rd'},
 {name:'Sevasi',img:G(5),psf:'₹4,200–5,800',vibe:'Quiet lanes, villas and value — the next Bhayli.',near:'Sevasi canal · Ring road · Schools'},
 {name:'Alkapuri',img:G(1),psf:'₹8,000–12,000',vibe:'Old money, central everything. Rarely on the market.',near:'Railway station · RC Dutt Rd · Malls'},
 {name:'Akota',img:U('photo-1600585154340-be6161a56a0c'),psf:'₹6,500–9,000',vibe:'Garden-side, premium and well connected.',near:'Akota garden · Stadium · Old Padra Rd'},
 {name:'Race Course',img:U('photo-1486406146926-c627a92ad1ab'),psf:'₹9,000–14,000',vibe:'The city\'s premium retail and office address.',near:'Circle · Banks · Showrooms'}
];
window.inr = p => p >= 1e7 ? '₹' + (p/1e7).toFixed(2).replace(/\.?0+$/,'') + ' Cr' : '₹' + Math.round(p/1e5) + ' L';
window.cardHTML = p => `<a class="pcard" href="property.html?id=${p.id}" data-view>
 <div class="ph"><span class="badge">${p.tag}</span><img src="${p.imgs[0]}" alt="${p.name}" loading="lazy"></div>
 <div class="meta"><h3>${p.name}</h3><span class="price">${inr(p.price)}</span></div>
 <small>${p.bhk ? p.bhk + ' BHK · ' : p.type + ' · '}${p.sqft.toLocaleString('en-IN')} sq ft · ${p.area}</small></a>`;
