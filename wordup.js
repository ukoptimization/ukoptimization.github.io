
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

brandsArray = ["Cerelac", "Gerber", "NaturNes","Nestlé Pure Life", "Perrier", "S.Pellegrino","Cheerios", "Fitness", "Lion", "Nesquik Cereal","Aero", "Cailler", "KitKat", "Milkybar", "Nestlé Les Recettes de l'Atelier", "Orion", "Quality Street", "Smarties", "Toll House","Nescafé", "Nescafé 3 in 1", "Nescafé Cappuccino", "Nescafé Classic", "Nescafé Decaff","Nescafé Dolce Gusto", "Nescafé Gold", "Nespresso","Buitoni", "Herta", "Hot Pockets", "Lean Cuisine", "Maggi", "Stouffer's"," Thomy","Carnation", "Coffee-Mate", "La Laitière", "Nido","Milo", "Nesquik", "Nestea","Chef", "Chef-Mate", "Maggi", "Milo","Minor’s", "Nescafé", "Nestea", "Sjora", "Lean Cuisine", "Stouffer's","Boost", "Nutren Junior", "Peptamen", "Resource","Dreyer’s", "Extrême", "Häagen-Dazs", "Mövenpick", "Nestlé Ice Cream","Alpo", "Bakers Complete", "Beneful", "Cat Chow", "Chef Michael’s Canine Creations", "Dog Chow", "Fancy Feast", "Felix", "Friskies", "Gourmet", "Purina", "Purina ONE", "Pro Plan"];
  

  
function scrubber(string) {
  let scrubbed = string;
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
