import { createContext, useState } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [name, setName] = useState("");
    const [noOfQues, setNoOfQues] = useState();
    const [diff, setDiff] = useState("");
    const [cate, setCate] = useState("");
    const [ques, setQues] = useState();
    const [score, setScore] = useState(0);
    const [options, setOptions] = useState("");
    const [quesNo, setQuesNo] = useState(0);

    return (
        <DataContext.Provider value={{
            name, setName, noOfQues, setNoOfQues, diff, setDiff,
            cate, setCate, ques, setQues, score, setScore,
            quesNo, setQuesNo, options, setOptions
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;