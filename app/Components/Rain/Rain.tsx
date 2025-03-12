const Rain: React.FC = () => {
    return (
      <div className="rain">
        {[...Array(20)].map((_, index) => (
          <div key={index} className="drop" />
        ))}
      </div>
    )
  }
  
  export default Rain