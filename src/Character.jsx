const PAL = {
  H: "#1b1224", S: "#a76a42", D: "#86502f", E: "#1b1224",
  W: "#fff0d1", M: "#7a2e38", T: "#d9d7d3", C: "#3b3f6b",
};
// 18 x 20 pixel map. H hair, S skin, D shade, E eye, W teeth, M mouth, T polo, C collar
const MAP = [
  "....HHHHHHHHHH....",
  "..HHHHHHHHHHHHHH..",
  ".HHHHHHHHHHHHHHHH.",
  ".HHHHHHHHHHHHHHHH.",
  ".HHHHHHHHHHHHHHHH.",
  ".HHSSHHSSSSHHSSHH.",
  ".HSSSSSSSSSSSSSSH.",
  ".SSSEESSSSSSEESSS.",
  "..SSSSSSSSSSSSSS..",
  "..SSSSSSDDSSSSSS..",
  "..SSSWWWWWWWWSSS..",
  "..SSSSMMMMMMSSSS..",
  "...SSSSSSSSSSSS...",
  ".....DDDDDDDD.....",
  "..TTCCTDDDDTCCTT..",
  ".TTTTTTTTTTTTTTTT.",
  ".TTTTTTTTTTTTTTTT.",
  ".TTTTTTTTTTTTTTTT.",
  ".TTTTTTTTTTTTTTTT.",
  ".TTTTTTTTTTTTTTTT.",
];

export default function Character({ size = 12 }) {
  const rects = [];
  MAP.forEach((row, y) =>
    [...row].forEach((c, x) => {
      if (c !== ".") rects.push(<rect key={x + "-" + y} x={x} y={y} width="1" height="1" fill={PAL[c]} />);
    })
  );
  return (
    <svg
      className="char"
      role="img"
      aria-label="Pixel-art character of Vishnu: curly dark hair, a big smile and a grey polo"
      width={18 * size}
      height={20 * size}
      viewBox="0 0 18 20"
      shapeRendering="crispEdges"
    >
      {rects}
    </svg>
  );
}
