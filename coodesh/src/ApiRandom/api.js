//create all things need to make search people!!!

export const SearchUser = async(results) => {
    try {
        let url =`https://randomuser.me/api/?${results}=`
        const response = await fetch(url)
        return await response.json()
        
    } catch (error) {
       console.log('error in search, wake please !!', error)
    }
}

export const LimitSearch = async(page=0 ,send,results=50) => {
   try {
       let url = `https://randomuser.me/api/?page=?${page}=&results=${results}&${send}=`
       const response = await fetch(url)
       return await response.json()
   } catch (error) {
       console.log('error fielt search', error)
   }
}

export const GetSearchApiData = async (url) => {
   try { 
       const response = await fetch(url)
       return await response.json()  
   } catch (error) {
       console.log('error this code', error)
   }
}

