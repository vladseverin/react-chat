import red from '@material-ui/core/colors/red';

const colors = [
  red[300], red[400], red[600], red[700], red[800], red[900]
];

export default function colorFrom(string) {
  try {
    const index = string
      .toString()
      .split('')
      .map(char => char.charCodeAt())
      .reduce((sum, num) => sum + num, 0);

    const colorIndex = index % colors.length;

    return colors[colorIndex]
  } catch(e) {
    console.error(e);
    return red[500];
  }
}
