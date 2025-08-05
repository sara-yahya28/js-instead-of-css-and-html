
let header = document.createElement("header");
let elzero = document.createElement("p");
let menu = document.createElement("ul");
let service = ["Home", "About", "Service", "Contact"];
let middle = document.createElement("div");
let footer = document.createElement("footer");

for (let i = 0; i < 4; i++) {
    let list = document.createElement("li");
    list.textContent = service[i];//not adding indox to list since it not arr
    menu.appendChild(list);
}

for (let i = 0; i < 15; i++) {
    let span = document.createElement("span");
    let product = document.createElement("div");
    let text = document.createElement("p");

    span.style.cssText = "font-size:40px; color:black;font-wight:normal; display:block;margin-bottom:10px;margin-top:10px;text-content:center;";
    span.textContent = [i + 1];
    product.style.cssText = "padding=20px;background-color:rgb(255,255,255);border:1px solid rgb(221,221,221);width:calc((100% - 40px)/3);box-sizing:border-box;text-align:center;color:rgb(136,136,136);border-radius:6px; flex-direction:row;"
    product.className = "product";
    text.textContent = "Product";

    product.appendChild(span);
    product.appendChild(text);
    middle.appendChild(product);

}

header.style.cssText = "display:flex; padding:20px; justify-content:space-between; align-items:center; background-color:rgb(255,255,255);";
elzero.style.cssText = "font-weight: bold; color: #23A96E;text-align: left;";
menu.style.cssText = "display:flex; flex-direction:row; gap:5px;list-style:none; padding:0; margin:0;color:#8F8A82; gap:10px;";
middle.style.cssText = "display:flex;padding:20px;flex-wrap:wrap;justify-content:center; gap:20px;box-sizing:border-box;min-hight:calc(100vh-142px);background-color:#ECECEC;";
footer.style.cssText = "background-color:rgb(35,169,110);font-size:20px;color:rgb(255,255,255);padding:20px;text-align:center;"

header.className = "head";
elzero.textContent = "Elzero";
elzero.className = "Logo";
middle.className = "content";
footer.textContent = "Copyright 2021";

header.appendChild(elzero);
header.appendChild(menu);
document.body.appendChild(header);
document.body.appendChild(middle);
document.body.appendChild(footer);