let componentHooks = [];
let currentHookIndex = 0;

// Как useState работает внутри React (упрощенно).
function useState(initialState) {
  let pair = componentHooks[currentHookIndex];
  if (pair) {
    // Это не первый рендер,
    // поэтому пара состояний уже существует.
    // Верните его и приготовьтесь к следующему хуку.
    currentHookIndex++;
    return pair;
  }

  // Это первый рендеринг,
  // поэтому создаем пару состояния и сохраняем ее.
  pair = [initialState, setState];

  function setState(nextState) {
    // Когда пользователь запрашивает изменение состояния,
    // помещаем новое значение в пару.
    pair[0] = nextState;
    updateDOM();
  }

  // Сохраняем пару для будущих рендеров
  // и подготовимся к следующему вызову хука.
  componentHooks[currentHookIndex] = pair;
  currentHookIndex++;
  return pair;
}

function Gallery() {
  // Каждый вызов useState() будет получать следующую пару.
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  // В этом примере не используется React,
  //поэтому вернем объект вместо JSX.
  return {
    onNextClick: handleNextClick,
    onMoreClick: handleMoreClick,
    header: `${sculpture.name} by ${sculpture.artist}`,
    counter: `${index + 1} of ${sculptureList.length}`,
    more: `${showMore ? 'Hide' : 'Show'} details`,
    description: showMore ? sculpture.description : null,
    imageSrc: sculpture.url,
    imageAlt: sculpture.alt,
  };
}

function updateDOM() {
  // Сбросить текущий индекс хука
  // перед рендерингом компонента.
  currentHookIndex = 0;
  let output = Gallery();

  // Обновить DOM, чтобы он соответствовал выходным данным.
  // Это та часть, которую React делает за вас.
  nextButton.onclick = output.onNextClick;
  header.textContent = output.header;
  moreButton.onclick = output.onMoreClick;
  moreButton.textContent = output.more;
  image.src = output.imageSrc;
  image.alt = output.imageAlt;
  if (output.description !== null) {
    description.textContent = output.description;
    description.style.display = '';
  } else {
    description.style.display = 'none';
  }
}

let nextButton = document.getElementById('nextButton');
let header = document.getElementById('header');
let moreButton = document.getElementById('moreButton');
let description = document.getElementById('description');
let image = document.getElementById('image');
let sculptureList = [
  {
    name: 'Sculpture 1 Name',
    artist: 'Sculpture 1 Artist',
    description: 'Sculpture 1 Description',
    url: 'https://example.com/sculpture1.jpg',
    alt: 'Sculpture 1 Description',
  },
  {
    name: 'Sculpture 2 Name',
    artist: 'Sculpture 2 Artist',
    description: 'Sculpture 2 Description',
    url: 'https://example.com/sculpture2.jpg',
    alt: 'Sculpture 2 Description',
  },
];

// Сделать интерфейс соответствующим начальному состоянию.
updateDOM();