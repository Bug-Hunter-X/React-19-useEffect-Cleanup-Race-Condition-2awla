```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is where the bug occurs
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>Count: {count}</div>;
}
```