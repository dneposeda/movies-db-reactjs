import { configure, shallow, render, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16/build";

// Сделаем функции Enzyme доступными во всех файлах тестов без необходимости импорта importing
global.shallow = shallow;
global.render = render;
global.mount = mount;
configure({ adapter: new Adapter() });

// Обрушим тест при любой ошибке
console.error = message => {
    throw new Error(message);
};
