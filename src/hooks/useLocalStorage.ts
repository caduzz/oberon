interface UseLocalStorageProps {
  getLocalStorage: (type: string) => any,
  setLocalStorage: (type: string, value: any) => any,
} 

const useLocalStorage = (): UseLocalStorageProps => {

  const getLocalStorage = (type: string) => {
    const res = localStorage.getItem(type)
    if(res){
      const data = JSON.parse(res);
      return data;
    }
    return null
  }

  const setLocalStorage = (type: string, value: any) => {
    const data = JSON.stringify(value);
    localStorage.setItem(type, data);
  }

  return { getLocalStorage, setLocalStorage };
};

export default useLocalStorage;
