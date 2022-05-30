const initialState = {
   userForm: {
    firstName: 'Jay',
    lastName: 'Khant'
   },
   users:[
    {
        firstName: 'Jay',
        lastName: 'Khant'
       },
       {
        firstName: 'Jay1',
        lastName: 'Khant1'
       }
   ]
}

console.log(initialState)

console.log({

    ...initialState,
    users:[
        ...initialState.users,
        {
            firstName: 'Jay2',
            lastName: 'Khant2'
           }
    ]
})