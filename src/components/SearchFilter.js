import React, { useEffect, useState } from 'react'
import Country from './Country'

const SearchFilter = ({ countries }) => {
  // 用来跟踪Filter Box 内输入的更改
  const [word, setWord] = useState('')
  // filterdisplay会基于search来显示更新的列表，默认是我们的name列表prop
  const [wordDisplay, setWordDisplay] = useState(countries)

  useEffect(()=> {
    setWordDisplay(countries)
  },[countries])// 仅在 countries 更改时更新

  useEffect(() => {
    // 在一个新数组中存放原始列表，将所有国家名转为小写字母，然后返回
    let oldList = countries.map(country => {
      return {name:country.name.toLowerCase()};
    });

    let newList = oldList.filter(country => 
        // 调用 includes 方法并用小写传递进'word'状态，这会检查 oldList 是否包含名字中带有'word'的国家
        // String.prototype.includes()
        country.name.includes(word.toLowerCase())
      );
    setWordDisplay(newList);
  },[word])

  // handleChange 每次运行时在输入字段都会有一个小更改
  const handleChange = e => {
    // console.log(e);
    if(e !== "") {
      setWord(e)

    }
  };

  return (
  <div>
    fileter: <input onChange= {e => handleChange(e.target.value)} />
    {wordDisplay.map((country,i) => 
      <Country key={i} country={country} />
    )}
  </div>
  );
};

export default SearchFilter