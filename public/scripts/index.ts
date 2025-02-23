const list = document.querySelector("#my-list");
const btn = document.querySelector("#my-button");
const searchBox = document.querySelector("#my-search");

const values = Array(10000)
  .fill(0)
  .map((_, index) => `item: ${index}`);

let currentIndex = 0;

searchBox?.addEventListener("input", (evt) => {
  const target = evt.target as HTMLInputElement;
  const val = target.value || "";

  if (!list) return;
  if (!val) {
    list.replaceChildren();
    return;
  }

  const newChildren: HTMLElement[] = [];

  for (let j = 0; j < values.length; j++) {
    let include = true;

    for (let i = 0; i < val.length; i++) {
      if (!include) break;

      if (!values[j].includes(val[i])) {
        include = false;
      }
    }

    if (include) {
      newChildren.push(createElemWithTxtCnt("li", values[j]));
    }
  }

  if (newChildren.length) {
    list.replaceChildren(...newChildren);
  } else {
    list.replaceChildren(createElemWithTxtCnt("li", "No results found"));
  }
});

btn?.addEventListener("click", () => {
  if (!list) return;

  let i = 0;
  for (; i < 10; i++) {
    const newItem = createElemWithTxtCnt("li", values[currentIndex + i]);
    list.appendChild(newItem);
  }
  currentIndex += i;
});

function createElemWithTxtCnt(elem: string, text: string) {
  const element = document.createElement(elem);
  const textNode = document.createTextNode(text);

  element.appendChild(textNode);

  return element;
}
