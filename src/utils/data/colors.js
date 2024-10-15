const colors = [
    '#2C3E50', // Dark Blue
    '#8E44AD', // Dark Purple
    '#C0392B', // Dark Red
    '#27AE60', // Dark Green
    '#D35400', // Dark Orange
    '#2980B9', // Dark Cyan
    '#8E44AD', // Dark Violet
    '#34495E', // Dark Grey Blue
];


export const getColor = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    
    let hashedInd = hash % colors.length;
    return colors[hashedInd];
};