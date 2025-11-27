(() => {
  const container = document.createElement('div');
  container.style.maxWidth = '600px';
  container.style.margin = '20px auto';
  container.innerHTML = `
    <h2>Product List Manager</h2>
    <div style="display:flex;gap:8px">
      <input id="plm-input" placeholder="New product name" style="flex:1;padding:6px"/>
      <button id="plm-add">Add</button>
    </div>
    <ul id="plm-list" style="list-style:none;padding:0;margin-top:12px;border:1px solid #ddd;padding:8px;border-radius:6px"></ul>
  `;
  document.body.appendChild(container);

  const input = container.querySelector('#plm-input');
  const addButton = container.querySelector('#plm-add');
  const list = container.querySelector('#plm-list');

  let nextId = 1;

  function createListItem(name, id) {
    const li = document.createElement('li');
    li.dataset.id = id;
    li.style.display = 'flex';
    li.style.justifyContent = 'space-between';
    li.style.alignItems = 'center';
    li.style.padding = '6px 4px';
    li.innerHTML = `
      <span class="plm-name" style="flex:1;padding-right:8px">${name}</span>
      <div style="display:flex;gap:6px">
        <button class="plm-edit">Edit</button>
        <button class="plm-delete">Delete</button>
      </div>
    `;
    return li;
  }

  addButton.addEventListener('click', () => {
    const val = input.value.trim();
    if (!val) return;
    const li = createListItem(val, nextId++);
    list.appendChild(li);
    input.value = '';
  });

  list.addEventListener('click', (e) => {
    const target = e.target;
    const li = target.closest('li');
    if (!li) return;
    if (target.classList.contains('plm-delete')) {
      li.remove();
    } else if (target.classList.contains('plm-edit')) {
      enterEditMode(li);
    }
  });

  function enterEditMode(li) {
    if (li.querySelector('input')) return;
    const span = li.querySelector('.plm-name');
    const current = span.textContent;
    const input = document.createElement('input');
    input.value = current;
    input.style.flex = '1';
    li.insertBefore(input, span);
    span.style.display = 'none';
    input.focus();

    function finishEdit() {
      const newVal = input.value.trim();
      span.textContent = newVal || current;
      span.style.display = '';
      input.remove();
      document.removeEventListener('click', outsideHandler);
    }

    function outsideHandler(e) {
      if (!li.contains(e.target)) finishEdit();
    }

    document.addEventListener('click', outsideHandler);
    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Enter') finishEdit();
      if (ev.key === 'Escape') {
        input.value = current;
        finishEdit();
      }
    });
  }
})();
