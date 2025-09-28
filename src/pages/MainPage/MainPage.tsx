// import { useAlert } from '@/features/alert';
// import { showNotification } from '@/features/notifications';
// import { useAppDispatch } from "@/shared/hooks/reduxHooks";
import { JSX } from "react";

export function MainPage(): JSX.Element {
  // const { showAlert } = useAlert();
  // const [count, setCount] = useState(0);
  // const dispatch = useAppDispatch();
  // const [width, setWidth] = useState(window.innerWidth);

  // useLayoutEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  // useEffect(() => {
  //   const handleResize = () => setWidth(window.innerWidth);
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  // const onButtonClick = () => {
  //   showAlert(`Hello ${count}`);
  //   dispatch(showNotification(`Hello ${count}`));
  //   setCount(count + 1);
  // };

  // const expensiveCalculation = useMemo(() => {
  //   let result = 0;
  //   for (let i = 0; i <= count; i++) {
  //     result += 1;
  //   }
  //   console.log('Вычисляем сложное выражение ====>>>>>');
  //   return result;
  // }, [count]);

  return (
    <div>
      {/* <h2>Ширина экрана: {width}px</h2>
      <p>
        Сумма чисел от 0 до {count}: {expensiveCalculation}
      </p>
      <button onClick={onButtonClick}>Click me</button>

      <div
        style={{ width: '300px', height: '300px', backgroundColor: 'red' }}
      ></div>
      {width > 800 && (
        <div
          style={{ width: '300px', height: '300px', backgroundColor: 'green' }}
        ></div>
      )} */}
      привет
    </div>
  );
}
