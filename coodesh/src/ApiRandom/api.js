//create all things need to make search people!!!
//this get parameter results
export const SearchUser = async(results) => {
    try {
        let url =`https://randomuser.me/api/?results=${results}`
        const response = await fetch(url)
        return await response.json()
    } catch (error) {
       console.log('error in search, wake please !!', error)
    }
}

//here boudaries fielt of search
export const LimitSearch = async(page=0,seed=1,results=50) => {
   try {
       let url =`https://randomuser.me/api?/page=?${page}&results=${results}&seed=${seed}`
       //&seed=${seed}
       const response = await fetch(url)
       return await response.json()
   } catch (error) {
       console.log('error fielt search', error)
   }
}

// here care about date api
export const GetSearchApiData = async (url) => {
   try { 
       const response = await fetch(url)
       return await response.json()  
   } catch (error) {
       console.log('error this code', error)
   }
}

