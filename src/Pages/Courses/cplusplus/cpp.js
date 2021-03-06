//Library Imports
import React from "react";
import LocalizedStrings from 'react-localization';
import {useSelector} from "react-redux";

//Component Imports


let langStrings = new LocalizedStrings({
    gr: {
        firstMessage:"Εισαγωγη",
        intro: "(ελληνικα)C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an " +
            "extension of the C programming language, also referred to as \"C with Classes\". The language has" +
            " expanded significantly over time, and modern C++ has object-oriented, generic, and functional features" +
            " in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language. (ελληνικα)",
        reasons: "Λόγοι για να χρησιμοποιήσετε C++",
        reasonsList1: "C++ is one of the world's most popular programming languages.",
        reasonsList2: "C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.",
        reasonsList3: "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList4: "C++ is portable and can be used to develop applications that can be adapted to multiple platforms.",
        reasonsList5: "C++ is fun and easy to learn.",
        reasonsList6: "As C++ is close to C# and Java, it makes it easy for programmers to switch to C++ or vice versa.",
        sections: "The available tutorials are:",
        helloWorld1: "1. Hello world.",
        inputOutput2: "2. Control output and User input.",
        comments3: "3. Comments.",
        variables4: "4. Variables.",
        strings5: "5. Strings.",
        arrays6: "6. Arrays.",
        if7: "7. Conditional Statements.",
        switchCase8: "8. Switch Case.",
        whileLoop9: "9. While Loop.",
        doWhile10: "10. Do-While Loop.",
        for11: "11. For Loop.",
        pointers12: "12. Pointers.",
        reference13: "13. Reference",
        functions14: "14. Functions.",
        classes15: "15. Classes.",
        constructorsDestructors16: "16. Constructors and Destructors."

    },
    en: {
        firstMessage:"Introduction",
        intro: "C++ is a high-level, general-purpose programming language created by Bjarne Stroustrup as an " +
            "extension of the C programming language, also referred to as \"C with Classes\". The language has" +
            " expanded significantly over time, and modern C++ has object-oriented, generic, and functional features" +
            " in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language.",
        reasons: "Why Use C++",
        reasonsList1: "C++ is one of the world's most popular programming languages.",
        reasonsList2: "C++ can be found in today's operating systems, Graphical User Interfaces, and embedded systems.",
        reasonsList3: "C++ is an object-oriented programming language which gives a clear structure to programs and allows code to be reused, lowering development costs.",
        reasonsList4: "C++ is portable and can be used to develop applications that can be adapted to multiple platforms.",
        reasonsList5: "C++ is fun and easy to learn.",
        reasonsList6: "As C++ is close to C# and Java, it makes it easy for programmers to switch to C++ or vice versa.",
        sections: "The available tutorials are:",
        helloWorld1: "1. Hello world.",
        inputOutput2: "2. Control output and User input.",
        comments3: "3. Comments.",
        variables4: "4. Variables.",
        strings5: "5. Strings.",
        arrays6: "6. Arrays.",
        if7: "7. Conditional Statements.",
        switchCase8: "8. Switch Case.",
        whileLoop9: "9. While Loop.",
        doWhile10: "10. Do-While Loop.",
        for11: "11. For Loop.",
        pointers12: "12. Pointers.",
        reference13: "13. Reference",
        functions14: "14. Functions.",
        classes15: "15. Classes.",
        constructorsDestructors16: "16. Constructors and Destructors."
    }
});



function cpp() {
    langStrings.setLanguage(useSelector(state => state.language));
    return(
        <div>
            <h1>C++</h1>
            <br/><br/>
            <h4>{langStrings.firstMessage}</h4>
            <br/><br/><br/><br/>
            <p>{langStrings.intro}</p>
            <br/>
            <h5>{langStrings.reasons}</h5>
            <br/>
            <ul style="list-style-type:circle;">
                <li>{langStrings.reasonsList1}</li>
                <li>{langStrings.reasonsList2}</li>
                <li>{langStrings.reasonsList3}</li>
                <li>{langStrings.reasonsList4}</li>
                <li>{langStrings.reasonsList5}</li>
                <li>{langStrings.reasonsList6}</li>
            </ul>
        </div>
        //einai test exw kai alla gramena chillarete
    )

}

export default cpp;
