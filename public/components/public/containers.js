export function SizedBox({ width, height }) {
  return (
    <div className="container">
      <style jsx>{`
        .container {
          width: ${width}px;
          height: ${height}px;
        }
      `}</style>
    </div>
  );
}

SizedBox.defaultProps = {
  width: 0,
  height: 0,
};
