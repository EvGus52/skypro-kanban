

function Main({ children }) {
  return (
    <main className="main _hide">
      <div className="main__block">
        <div className="main__content">
          {children}
        </div>
      </div>
    </main>
  );
}

export default Main; 