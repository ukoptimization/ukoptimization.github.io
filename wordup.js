
/* global CKEDITOR, TurndownService */
var turndownService = new TurndownService({
  bulletListMarker: "-",
  headingStyle: "atx",
});
// Configure CKEditor window
CKEDITOR.replace("wordup", {
  dataIndentationChars: "  ",
  format_tags: "p;h1;h2;h3;h4;h5",
  height: 325,
  removeButtons:
    "Underline,Strike,Subscript,Superscript,Anchor,Styles,Specialchar",
  toolbarGroups: [
    { groups: ["basicstyles"], name: "basicstyles" },
    { groups: ["links"], name: "links" },
    { groups: ["list"], name: "paragraph" },
    { groups: ["list"], name: "insert" },
    { groups: ["mode"], name: "document" },
    { groups: ["styles"], name: "styles" },
  ],
});

function scrubber(string) {
  brandsArray = ["Accupure","Adoptapet.Com","Alimentarium","All4Youth","Aly","Aov","Artesano","Association Sports Et Loisirs Nestle (Asln)","Atrium Innovations","Avante","Aveias Organicas","Bananita Dolca","Banco Sabadell","Barkat","Basix","Bibite","Biggie","Bio Therapeutic Drainage","Bioinmunis","Biovida","Bishulim","Bistrenok","Black Roast","Blazhenstvo","Blue Cross","Bonus","Breeder","Bubchen","Buona-la-vita","Busy Bones","Cadipro","Cafe De Olla","Caramelle","Cereavena","Chipsi","Chocomiel","Cognita Gold","Cold Brew","Collectsya","Comecar Saudavel","Compensa","Confiteria","Cremositas","Dar Natury","Dayem","Dona Juanita","Douglas Labs","Dpa","Dulce Receta","Dulci Crema","Ecuateur","El Castell","Elegis Glaciar","Erlenbacher","Esencial","Events","Everroot","Fdgard","Fiber Choice","Fine Dining Lovers","Flachkraker","Follow Up","Formula 4 Success","Fresh & Fruity","Freundschafts-wochen","Fruchtminis","Frutess","Frutti","Gauchitas","Gluten Free","Gold Crisp","Goodnes","Growing Up","Healthy Kids","Heartland","Heavenly Creamer","Henri","Hryliazh Shokoladnyi","Ibgard","Insta Crem","Iron Plus","Itineraries Of Taste","Jacky","Jannys","Jede","Khrum","Klean","Kofe S Molokom","Kreem Mee","Krukta","La Choza","La Pradera","Lactalis","Linha Zero","Little Breaks","Mai Cui Pian","Many","Media Crema","Metrogelis","Metvix","Mezeast","Miette","Mixes","Modulife","Mommalove","Moraditas","Museo","Nav","Ncare","Nestle Nutrition Institute (Nni)","Nestle Recipes","Nestrovit","Neutrality","Nqac D","Nutri Pro","Nutripak","Nutritional Academy","Onco","Optilac","Origens","Orthica","Outsiders","Panettones","Pension Fund","Phlogenzym","Pliaglis","Proline","Proof","Pura Fruta","Puteshestvye","Quench","Quotidia","Readyrefresh","Recchitelle","Recetas Nestle","Recette Oubliee","Red Jak","Red Line","Regional Spring Water","Remfresh","Reserva Mexicana","Revena","Rokoko","Rosemary","Rsw","Ruffs","Rumbo Seguro","Salinis","Saxon","Schar","Seattle's Best","Sensatsii","Shsh","Silkis","Snackmix","Start Healthy Stay Healthy","Sweet Habit","Tea-mate","Tea-time","Top","Toronto","Trophic","Tuc","U4Hk","Vacantazas","Vem De Bolo","Visita Medica","Vit","Vita","Vital Proteins","Vitalac","Vivée","Vostorg","Well Assist","Wellness","Wild Rose","Wildscape","You'll Love Coles","Youth Initiative","Zoorpresa","Glutino","C","Cricri","Danky","Dreumesmelk","Eskimo","Nessucar","Xxx","Nero","Rossana","Monoprix","Affinibase","Blue Bottle","Chameleon","Fruty Fresco","Toki","Yus","Brasilia","Cailler","Christina","Dallmayr","Musun","Nescafe","Sunrise","Nespresso","Nestea","Bolero","Bonka","Brasa","Brite","Cap Junjung","Carnation","Caro","Coffee-mate","Cremora","Ecco","Eko","El Chana","Everyday","Fruita Vitals","God Morgon","Huesitos","Krematop","Milo","Mokambo","Natura","Natural Bliss","Nesfruta","Nestlé","Orchard","Orzoro","Pensal","Ricore","Starbucks Medium","Tofina","Assis","Vitaminchik","Bonjorno","Buondi","Cafedor","Cafelia","Core","Goodhost","Incarom","La Estrella","Libby's","Linde's","Loumidis","Monopoikiliakos","Papagalos","Pero","Ricory","Santa Cristina","Sical","Whip Mate","Zoegas","Presto","Sweet Leaf","Tofa","Tradewinds","Veekreme","Yukery","International Roast","Vitality","Illy","Landwer","Beit Hashita","Starbucks","Cinnamon Toast Crunch","Force","Harvest Home","Rice Pops","Carlos V","Lifita","Avena Y Más","Bar One","Box Bowls","Bran Flakes","Cereal Gold","Cheerios","Chocapic","Chokella","Cini-minis","Clusters","Cocoa Puffs","Cookie Crisp","Corn Flakes","Country Corn Flakes","Crisp Rice","Crunch","Curiously Cinnamon","Duo","Erdbeer Minis","Estrelitas","Fibre 1","Fitness","Fitnesse","Frutina","Go Free","Gold","Gold Flakes","Golden Grahams","Golden Minis","Golden Nuggets","Honey Gold","Honey Stars","Kangus","Khrutka","Koko Krunch","Kosmostars","La Lechera","Lion","Lucky Charms","Mix","Moca","Musli","Nescau","Nesfit","Nesplus","Nesquik","Oats & More","Shredded Wheat","Shreddies","Snow Flakes","Strawberry Minis","Toffee Crisp","Trio","Trix","Tropikal Meyveli Musli","Zucosos","Bran Plus","Flemings","Fruity Bites","Le Snak","Muesli","O&G","Oat Crisp","Oat Flakes","Oatbrits","Oats","Plus","Uncle Tobys","Vita Brits","Malt O Meal","Aldi","Asda","Brakes","Centra","Co-op","Crownfield","Dunnes","Jack's","Morrisons","Sainsburys","Supervalu","Tesco","Waitrose","Woolworths","Black Knight","Hsu Fu Chi","Hsu Fu Chi Sashima","Criollita","3 Pauly","Allen’s","Chewmix","Balaton","Aero","Boci","Melba","Parizsi","Bolibomba","Pumpedli","Ambassador","Cuisine","Femina","Frigor","Les Recettes De L'atelier","Sublim","El Castillo","Chocoton","D'onofrio","Lentejas","Morochas","Motta","Sublime","Baton","Caribe","Garoto","It Coco","Opereta","Serenata De Amor","Surreal","Talento","Heards","Cheng Wei Kong Jian","Dodo","Dr. Bear","Goodness Of Nature","Houqie","Nong99","Qiancengsu","Lanvin","Mabel","Alteza","Grill","Kuky","Mc Kay","Morocha","Triton","100 Grand","Abuelita","After Eight","All Stars","Almonris","Alpino","Amor","Animal Bar","Anticol","Baby Ruth","Beso De Amor","Big Turk","Black Magic","Blond","Blue Riband","Bono","Breakaway","Bros","Butter Menthol","Butterfinger","Caja Roja","Cajetoso","Calipso","Can Can","Capri","Caramac","Chaobii","Charge","Choclait Chips","Choco Crossies","Chocolate Log","Chocopostre","Chokito","Chunky","Ciocoblocco","Cipiripi","Classic","Club","Coco","Cocoa Plan","Cocosette","Coffee Crisp","Crisp","Cuicuisha","Dairy Box","Daisy","Damak","Deditos","Dessert","Diplomata","Dolca","Dore","Drifter","Extrafino","Favourites","Freskas","Frisco","Frutips","Galak","Golden Rough","Goobers","Goodmix","Grand Chocolat","Hit","Ideal","Imperial","Jiten Dar","Joe","Kit Kat","Kohler","Larin","Lollo","Lz","Macarena","Mackintosh's","Manicero","Maria","Maxibon","Menier","Milkybar","Mini","Mint Pattie","Mirage","Mix-ups","Morenitas","Muecas","Munch","Munchies","Mura","Negresco","Negrita","Nestlé 1927","Nips","Nuts","Oh Henry","Party","Passatempo","Passions","Pixie Caramel","Platillos","Polly","Polo","Pop","Postres","Pralinato","Prestigio","Princesa","Princessa","Quality Street","Quechaokafeile","Raisinets","Real","Ricas","Rolo","Sahne Nuss","Saltinas","Savoy","Savoy Bolero","Savoy Cricri","Savoy Galak","Savoy Ping Pong","Savoy Samba","Savoy Toronto","Sensacao","Shark","Smarties","Smash","Snocaps","Soothers","Starz","Suflair","Sundy","Super 8","Super Fighters","Super Flyers","Super Reds","Surpresa","Susy","Swiss","Tabletas Chocolateria","Tango","Tex","Throaties","Tin Larin","Toffo","Tola","Toll House","Tostines","Trencito","Triangulo","Turtles","Vaferito","Violet Crumble","Walnut Whip","Yes!","Yorkie","Zoologia","Banany","Deli","Delissa","Kastany","Kocici Jazycky","Kofila","Koko","Lentilky","Maraska","Margot","Milanska Smes","Milena","Modre Z Nebe","Nugat","Nugeta","Orient Dezert","Orion","Pralinky","Studentska","Studentska Pecet","Apropo","Argaliot","Bamba","Bissli","Crispy","Dubonim","Habayit","Lachmit","Osem","Petit Beurre","Sunny Wheat Crackers","Bon Pari","Dolceca","Fox's","Fruit Joy","Haslerky","Jojo","Koala","Komilfo","Lifesavers","Lipo","Plaistowe","Quick-eze","Szerecsen","Zora","Bacetti","Baci","Fondente Luisa","Fondenti","Grifo","Ore Liete","Perugina","Tablo","Trasimeno","Powerbar","Rodnye Prostory","Rgs","Rossiya","Sudarushka","Zolotaya Marka","Randoms","Rowntrees","Samba","Ping Pong","Sfinx","Sparta","Artek","Palitra","Romashka","Stozhary","Svitoch","Zoriane Siaivo","Roll-ups","Bottle Caps","Gobstopper","Laffy Taffy","Lik-m-aid Fun Dip","Nerds","Pixy Stix","Runts","Shockers","Spree","Sweetarts","Wonka","Docello","Popco","Chervonyi Mak","Crema De Leche","Fussell's","Ovaltine","Others","Buitoni","Kremly","Ohyo","Maronsui's","Maggi","Morelia","Cergas","Nesqino","Acticol","Acticor","Actiplus","Acti-transit","Acti-v","Aisipei","Amanecer","Bear Brand","Betty","Biovita","Bistroff","Bliss","Bunyad","Butterfly","Calcium Plus","Campesina","Canprolac","Cerelac","Cerevita","Chambinho","Chambourcy","Chamyto","Chandelle","Chiquitin","Chuckie","Cream","Creations","Creme De Leite","Dairy Farm","Dalky","Dancow","Eagle","El Rodeo","Essentia","Farinha Lactea","Fiorelo","Flair","Flanby","Folie De Fruits","Food Lion","Fresh","Fruttolo","Gastro Protect","Gloria","Gold Cross","Golden Morn","Green Butterfly","Grego","Griego","Highlander","Hirz","Il Latte Condensato","Just Milk","Klim","La Laitière","La Vaquita","Lc1","Le Viennois","Le Yaourt A La Grecqe","Leche Condensado","Leche Ideal","Leche Sur","Lechero","Leite Moca","Longa Vida","Milchmädchen","Milkmaid","Milkpak","Mocinha","Molico","Munch Bunch","Neige De Lait","Nescao","Nespray","Nestomalt","Neston","Nestum","Nesvita","Nido","Ninho","Nona","Nube","Nutri","Nutri Rindes","Nutri-rinde","Nuvem De Leite","Omega Plus","Rica Chicha","Ricacao","Rinde","School","Shimmy","Ski","Soleil","Sprouts Farmers Market","Stalden","Sunshine","Supligen","Sveltesse","Svelty","Tip Top","Tonimalt","Total Digest","Treat","Twin","Vascolet","Velours De Creme","Viennois","Viking Melk","Wellness Club","White Lily","Yaos","Yiyang","Yiyue","Yiyun","Yoco","Yoggi","Yogu Yogu","Nesmalt","Granko","Anchor","Hannaford","Madame Gougousse","Pak Fook","Winiary","Alipende","Auchan","Eroski","Home Brand","Kroger","Market Pantry","Milbona","Price Rite","Publix","Safeway","Shop Rite","Velvet","Wal Mart","Campestre","Dona Mari","Dongusto","Malher","Delissio","Pizza Fiesta","Sosko","Zacin C","Hälsans Kök","Life Cuisine","Fabada Litoral","Mousline","Mivina","Bofrost","California Pizza Kitchen","Consomate","Findus","Hot Pockets","Lean Pockets","Torchyn","Wagner","Dorot","Halsanskok","Heat & Serve","Israeli ","Mana Chama","Meals-on-the Go","Perfecto","Apetito","Baracke","Bell","Bonjour","Casa Giuliana","Crosse & Blackwell","Digiorno","Garden Gourmet","Harvest Gourmet","Herta","Hiestand","La Pasticceria","Le Parfait","Lean Cuisine","Leisi","Litoral","Mccain","Milotal","Solis","Stouffer’s","Stouffer's","Tapugan","Thomy","Tombstone","Valsoia","Zapetti","Thorcyn","Chef-mate","Gratify","Of Tov","Sunny Crackers","Sabra Salads","Eskal","Frigemo","Migros","Sweet Earth","Totole","Froneri","Magnum","5Rams","Aino","Antica Gelateria Del Corso","Sin Parar","Alaska","Frio Rico","Peziduri","Häagen Dazs","Mövenpick","10-4-2 (Ten For Two)","48 Kopeek","8 Cube","Apolo","Beano","Bennana","Big Sandwich","Buckingham","Bum Bum","Chengzhen","Christie","Cono","Coppa Del Nonno","Del Monte","Dibs","Disney","Dreyer's","Drumstick","Edy's","Eski","Extreme","Gelato","Gold Edition","Gumigum","Hamshushim","Hua Xin Tong","Joya","Kimo","Kimo Kono","Kimy","La Cremeria","La Frutta","Luxor","Matcool","Mega","Mickey","Moji","Napolini","Oreo","Parlour","Payco","Pirulo","Popsy","Real Dairy","Roller","Savory","Schoeller","Skinny Cow","Squizz","Sundae","Super Chocpop","Temptations","Tropicana","Walnut Whip/Whip","Chamonix","Outshine","M&M","Milka","Nuii","Toblerone","Frosty Paws","Nature's Heart","Dysphagia Awareness","Kid Essentials","Build Up","Nutrisource","Casec","Garden Of Life","Alfamino","Alfare","Althera","Beneprotein","Boost","Celltrient","Clinutren","Compat","Compleat","Diabetisource","Fiber Max","Fiber One","Fibremais","Impact","Isocal","Isosource","Mct Oil","Meritene","Modulen","Nestlé Health Science","Novasource","Nutren","Optifast","Optifibre","Oral Impact","Peptamen","Pronourish","Renutryl","Resorb","Resource","Sondalis","Sustagen Hospital Formula","Thickenup","Ultracal","Vivonex","Persona","Pure Encapsulations","Vitaflo","Wobenzym","Zenpep","Nestilly","Coolpro","Fruittime","Ricoffy","Roma","Sweet Time","Super Soup","Cubalux","Easywhip","Mcdonald's","Nestargel","Regilait","San Pellegrino","Amarcrem","Bacio","Fornella","Jolly","Latte","Danie W 5 Minut","Jarzynka","Kogutek","Pomysl Na","Smaczna Zupa","Sos Italia","Chef","Haoji","R001865","Minor’s","Clic","Karima","Nestlé Professional","Oscar","Puerell","Roastelier","Splenda","Sunsational","Viaggi","Yo-nes","Sjora","Cara","Georgia","Gfs","Club Bebe","Maternavida","Spoonfulone","1St Foods","2Nd Foods","3Rd Foods","Bobo Frut","Freshful Start","Gerber","Good Start","Graduates","Lil Mixers","Paso 1","Paso 2","Beep","Alprem","Al 110","Alete","Alsoy","Baby","Baby & Me","Baby Cereals","Baby Club","Baby Gourmet","Babynes","Beba","Bebe Brand","Beech-nut","Bona","Ceregrow","Crecimiento","Excel","Excella Gold","Fm 85","Good Care","Good Grow","Groeie Start","Guigoz","Iogolino","Junior","Lactogen","Lactogrow","Lactokid","Little Steps","Materna","Materplus","Mio","Mom","Mom&Me","Mucilon","Nan","Nancare","Nangrow","Nankid","Nativa","Naturnes","Neslac","Nestogen","Nestogeno","Nestogrow","Nestonutri","Nidal","Nidex","Nidina","Nutrend","Papillas","Papinha","Pelargon","Piltti","Prelactogen","Prenan","Pro Natal","P'tit Dej","Sinlac","Sma","Yogolino","Aqiva","Ascenda","Belsol","Bonakid","Bonamil","Bonna","Enercal Plus","Illuma","Illumcare","Mama","Parenting Club","Promama","Promil","S-26","S-26 Gold","Sma Gold","Ultima","Wyeth Nutrition","Delicat","Milkies","Petcentric","Trekker's","Merrick Pet Care","Lily’s Kitchen","Whole Earth Farms","Dollar General","H.E.Butt","Shepherd","Petfinder.Com","Zukes","Adventuros","Alpo","Andis","Bakers","Beggin’","Bella","Beneful","Beta","Beyond","Bonio","Bonnie","Bonzo","Busy","Campeon","Castor&Pollux","Cat Chow","Collagen Beauty","Country Farms","Darling","Deli Bakie","Deli Cat","Dentalife","Dog Chow","Dog Menu","Dogli","Dogui","Doguitos","Doko","Drop Of Life","Duro De Roer","Exceed","Excellent","Fancy Feast","Felix","Fido","Friskies","Gati","Gatina","Gatsy","Go-cat","Gourmet","Hi Pro","Honest To Dog","Just Right","Kanina","Kit 'n Kaboodle","Kitten Chow","K-nina","Ladrina","Lucky Dog","Luv","Mainstay","Matzinger","Mighty Dog","Moist & Meaty","Mon Petit","Mordha","Morepa","Muse","Nat","Noblesse","Omega","One","Perrarina","Petlife","Plusepa","Prime Bones","Pro Plan","Pro Plan Veterinary Diets","Puppy Chow","Purina","Secondnature","Smoochies","Supercoat","Tbonz","The Pioneer Woman","Tidy Cats","Tom Poes","Tonus","Total Care","Tux","Vegandha","Veterinary Diets","Vital Balance","Waggin' Train","Whisker Lickin's","Winalot","Yesterday's News","Tails.Com","Terra Canis","Wamiz","Acnecide","Azzalure","Basiron","Benzac","Cetaphil","Clobex","Daylong","Differin","Dysport","Emervel","Epiduo","Excipial","Galderma","Imazol","Inneov","Lacovin","Loceryl","Mirvaso","Neocapil","Nutragent","Onilaq","Oracea","Proactiv","Qilib","Restylane","Rozex","Soolantra","Tri-luma","Vectical","Very Best Bakers","Special.T","Eco De Los Andes","Glaciar","La Vie","Myspring","Aquarel","Awafrut","Belte","Nestle Vera","Pulmuone","Pure Life","Pureza Vital","Splash","Aberfoyle","Acqua Brillante","Acqua Panna","Alacam","Arrowhead","Bbthe","Buxton","Calistoga","Contrex","Cristalp","Deer Park","Diger","Erikli","Gingerino","Granini","Henniez","Hepar","Ice Mountain","Kirkland Signature","Korpi","Levissima","Minere","Montclair","Naleczowianka","Ozarka","Pago","Perrier","Poland Spring","Romanette","San Narciso","Sanbitter","Santa Maria","Sta. Maria","Valvert","Vera Belte'","Viladrau","Vittel","Yunnan Shan Quan","Zephyrhills","Ready Refresh","Sao Lourenco","Sohat"]; let scrubbed = string;
  scrubbed = scrubbed

    .replace(/<p><strong>&nbsp;<\/strong><\/p>/g, "")
    .replace(/<strong>&nbsp;<\/strong>/g, "")
    .replace(/<p>&nbsp;<\/p>/g, "")
    .replace(/<h1>&nbsp;<\/h1>/g, "")
    .replace(/<h2>&nbsp;<\/h2>/g, "")
    .replace(/<h3>&nbsp;<\/h3>/g, "")
    .replace(/<h4>&nbsp;<\/h4>/g, "")
    .replace(/<h5>&nbsp;<\/h5>/g, "")
    .replace(/<(h[^>])+><strong>(.*)<\/strong><\/h[^>]+>/g, "<$1>$2</$1>")
    .replace(/<(h[^>])+><em>(.*)<\/em><\/h[^>]+>/g, "<$1>$2</$1>")
    .replace(/<(table|td|tr|th)\s+width="(\d+?)">/g, "<$1>")
    .replace(/<\/strong><strong>/g, "")
    .replace(/&ndash;ndash;/g, "&mdash;")
    .replace(/\n\n\n/g, "\n\n")
    .replace(/\n\n/g, "\n")
    .replace(
      /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g,
      "&nbsp;"
    )
    .replace(
      /&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g,
      "&nbsp;"
    )
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;&nbsp;/g, "&nbsp;")
    .replace(/&nbsp;/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace('&ldquo;','"')
    .replace('&rdquo;','"')
    .replace('&rsquo;',"'");

  let resultBrands = scrubbed;
  for (let i in brandsArray) {
    resultBrands = resultBrands.replace(
      new RegExp('\\b' + brandsArray[i] + '\\b', 'gi'),
      "<i>"+brandsArray[i]+"</i>"
    );
  }
  scrubbed = resultBrands;
  return resultBrands;

  //взяли ми такі все поміняли, і після цього поміняли бренди з масива
}

// function brands(string) {
//   brandsArray = ["Lion","Kit Kat", "Gerber", "Test", "full"];
//   let resultBrands = string;
//   for (let i in brandsArray) {
//   resultBrands = resultBrands.replace(new RegExp('('+brandsArray[i]+')(?!<\\/b>)', "i"), "<em>$1</em>");
//   }
//   }

function regexEscape(string) {
  return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}

function reg(string) {
  var escaped = string;
  var flags = "g";
  var escapedNum = Number;
  escaped = regexEscape(escaped);
  escaped = "https?://" + escaped;
  ++escapedNum;
  console.log(escapedNum);
  return new RegExp(escaped, flags);
}

function addDomainFilter(string, domain) {
  var filtered = string;
  var domainregex = reg(domain);

  filtered = filtered.replace(domainregex, "");

  return filtered;
}

function addTargetBlank(string) {
  var plusTarget = string;

  plusTarget = plusTarget.replace(
    /<(a\s+(?:[^>]*?\s+)?href="https?([^"]*)")/g,
    '<$1 target="_blank" class="externalLink"'
  );

  return plusTarget;
}

function clearBoth() {
  CKEDITOR.instances.wordup.setData("");
  document.getElementById("output").value = "";
}

function wordup() {
  var pasteData = CKEDITOR.instances.wordup.getData();

  pasteData = scrubber(pasteData);

  if (
    document.getElementById("domainfilter").checked === true &&
    document.getElementById("domainname").value
  ) {
    pasteData = addDomainFilter(
      pasteData,
      document.getElementById("domainname").value
    );
  }

  if (document.getElementById("targetblank").checked === true) {
    pasteData = addTargetBlank(pasteData);
  }

  if (document.getElementById("markdown").checked === true) {
    pasteData = turndownService.turndown(pasteData);
  }

  document.getElementById("output").value = pasteData;
}
document.getElementById("clear").addEventListener("click", clearBoth);
document.getElementById("convert").addEventListener("click", wordup);
document.getElementById("targetblank").addEventListener("click", wordup);
document.getElementById("markdown").addEventListener("click", wordup);
document.getElementById("domainfilter").addEventListener("click", wordup);
