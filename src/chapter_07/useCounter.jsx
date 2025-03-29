import React, { useState } from "react";

function useCounter(initialValue) {
    const [count, setCount] = useState((initialValue));

    // 밑의 2개는 함수이다.
    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0));    // 음수인 경우는 0을 선택함

    return [count, increaseCount, decreaseCount];
};

export default useCounter;