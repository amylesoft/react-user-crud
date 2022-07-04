import React from 'react';
import { render } from '@testing-library/react';
import CreateUser from './components/User/CreateUser'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux';
import store from './store'

let mockUser = [{
    "_id": "62a99a66fcd4240304968fbf",
    "phoneNo": "7567676230",
    "firstName": "Jay",
    "lastName": "Khant",
    "__v": 0
},
{
    "_id": "62a99a67fcd4240304968fc3",
    "phoneNo": "9106158457",
    "firstName": "sagar",
    "lastName": "kankadiya",
    "__v": 0
}]

// jest.mock('./service/UserService.js', class fetchUser {
//     findAll = jest.fn().mockImplementation(() => { return mockUser })1
// })
 

beforeAll(() =>
    class service {
        constructor() {
            this.foo = 'bar';
            console.log(this.foo);
        }
        findAll() {
            console.log('Playing sound file ');
        }
    })
afterEach(() => console.log('middle'))
afterAll(() => console.log('end'))



test('header render with correct text', () => {
    const { getByTestId } = render(<Provider store={store}>
        <CreateUser />
    </Provider>)
    const headerEl = getByTestId('add-user')
    expect(headerEl.textContent).toBe('Add User');
});
