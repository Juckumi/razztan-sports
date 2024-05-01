import styled from "styled-components";

const Searcher = styled.input`
 width: 25rem;
 height: 2rem;
 border-radius: 0.7rem;
 border: none ;
 margin: 1rem;
 font-size: 1.25rem;
 padding:  0 1rem;

 &&:focus {
    outline: 3px solid var(--color-brand-green-100); 
  
}



`

export default Searcher;