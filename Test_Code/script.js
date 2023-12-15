let isDragging = false;
let offsetX = 0;
let offsetY = 0;


function handleDragStart(e, targetElement) {
  isDragging = true;
  offsetX = e.clientX - targetElement.getBoundingClientRect().left;
  offsetY = e.clientY - targetElement.getBoundingClientRect().top;
  targetElement.style.cursor = 'grabbing';
}
/*             
               e =      드래그 이벤트 객체              = 마우스 이벤트 감지
   targetElement =      드래그 되는 요소                = 함수가 호출될때 해당 요소가 매개변수로 전달
      isDragging =      드래그 상태 여부 변수           =  true일때만 드래그 진행중
   offsetX, offsetY =   마우스 이벤트 가능한 범위 지정  =  드래그 동작 중에 마우스 포인터와 대상 요소 간의 상대적인 이동을 계산
*/

function handleDragMove(e, targetElement, targetScrollableContent) {
  if (isDragging) {
    const x = e.clientX - offsetX;
    const y = e.clientY - offsetY;
    targetElement.style.left = `${x}px`;
    targetElement.style.top = `${y}px`;
  }
}
/*
                        x, y = 새로운 위치 계산 변수 = 현재 마우스 포인터 좌표에서 이전 계산한 offsetX, Y 값 빼기
    targetElement.style.left = 드크롤 위치 업데이트 = 실시간으로 변하게 해줌

*/

function handleDragEnd(targetElement) {
  isDragging = false;
  targetElement.style.cursor = 'grab';
}
/*
커서 모양바뀌기
*/

function handleMouseLeave(targetElement) {
  if (isDragging) {
    isDragging = false;
    targetElement.style.cursor = 'grab';
  }
}
/*
커서 모양바뀌기
*/

function handleDoubleClick(targetElement) {
  targetElement.style.left = '0';
  targetElement.style.top = '0';
  offsetX = 0;
  offsetY = 0;
}
/* 
 더블 클릭시 사용자가 재배치 하게 초기화함
*/

function handleWheelScroll(e, targetScrollableContent) {
  targetScrollableContent.scrollTop += e.deltaY;
}
/*
*/

const element = document.getElementById('myElement');
const elementF1 = document.getElementById('f1Element');
const elementF2 = document.getElementById('f2Element');
const elementF3 = document.getElementById('f3Element');
const scrollableContent = document.getElementById('scrollableContent');
const scrollableContentF1 = document.getElementById('scrollableContentF1');
const scrollableContentF2 = document.getElementById('scrollableContentF2');
const scrollableContentF3 = document.getElementById('scrollableContentF3');

element.addEventListener('mousedown', (e) => handleDragStart(e, element));
element.addEventListener('mousemove', (e) => handleDragMove(e, element, scrollableContent));
element.addEventListener('mouseup', () => handleDragEnd(element));
element.addEventListener('mouseleave', () => handleMouseLeave(element));
element.addEventListener('dblclick', () => handleDoubleClick(element));
element.addEventListener('wheel', (e) => handleWheelScroll(e, scrollableContent));

elementF1.addEventListener('mousedown', (e) => handleDragStart(e, elementF1));
elementF1.addEventListener('mousemove', (e) => handleDragMove(e, elementF1, scrollableContentF1));
elementF1.addEventListener('mouseup', () => handleDragEnd(elementF1));
elementF1.addEventListener('mouseleave', () => handleMouseLeave(elementF1));
elementF1.addEventListener('dblclick', () => handleDoubleClick(elementF1));
elementF1.addEventListener('wheel', (e) => handleWheelScroll(e, scrollableContentF1));

elementF2.addEventListener('mousedown', (e) => handleDragStart(e, elementF2));
elementF2.addEventListener('mousemove', (e) => handleDragMove(e, elementF2, scrollableContentF2));
elementF2.addEventListener('mouseup', () => handleDragEnd(elementF2));
elementF2.addEventListener('mouseleave', () => handleMouseLeave(elementF2));
elementF2.addEventListener('dblclick', () => handleDoubleClick(elementF2));
elementF2.addEventListener('wheel', (e) => handleWheelScroll(e, scrollableContentF2));

elementF3.addEventListener('mousedown', (e) => handleDragStart(e, elementF3));
elementF3.addEventListener('mousemove', (e) => handleDragMove(e, elementF3, scrollableContentF3));
elementF3.addEventListener('mouseup', () => handleDragEnd(elementF3));
elementF3.addEventListener('mouseleave', () => handleMouseLeave(elementF3));
elementF3.addEventListener('dblclick', () => handleDoubleClick(elementF3));
elementF3.addEventListener('wheel', (e) => handleWheelScroll(e, scrollableContentF3));