const board = document.getElementById('board');

const SQUARE_BAR = 500;

const colors = ['#BB86FC', '#3700B3', '#6200EE', '#03DAC6', '#018786', '#B00020', '#FF0266',
                '#FFDE03', '#7E57C2', '#64FFDA', '#69F0AE', '#FF7043'];
                

const setRandomColor = () => {
    const i = Math.floor(Math.random() * colors.length);

    return colors[i];
};

const setColor = elem => {
    const color = setRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = elem => {
    elem.style.backgroundColor = '';
    elem.style.boxShadow = '';
};


for (let i = 0; i < SQUARE_BAR; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => {
        setColor(square);
    });
    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });

    board.append(square);
}