//create all things need to make search people!!!
//this get parameter results
export const SearchUser = async(results) => {
    try {
        //https://dog.ceo/api/breeds/list/all
        //`https://randomuser.me/api/?results=${results}`
        let url =`https://randomuser.me/api/?results=${results}`
        const response = await fetch(url)
        console.log('etest in response', response)
        return await response.json()
    } catch (error) {
       console.log('error in search, wake please !!', error)
    }
}

//here boudaries fielt of search
export const LimitSearch = async(page=0,seed,results=50) => {
   try {
        //`https://randomuser.me/api?/page=?${page}&results=${hound}&seed=${seed}`
        //
       let url =`https://randomuser.me/api?/page=?${page}&results=${results}&seed=${seed}`
       //&seed=${seed}
       const response = await fetch(url)
       return await response.json()
   } catch (error) {
       console.log('error fielt search', error)
   }
}


