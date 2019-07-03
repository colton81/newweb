import React from 'react'



class Typewriter1 extends React.Component {

    static defaultProps = {
      heading: '',
      string: '',
      dataText: []
    }
  
    constructor(props) {
      super(props);
  
      this.state = {
        text: '',
        isDeleting: false,
        loopNum: 0,
        typingSpeed: 150
      }
    }
  
    componentDidMount() {
      this.handleType();
    }
  
    handleType = () => {
      const { dataText } = this.props;
      const { isDeleting, loopNum, text, typingSpeed } = this.state;
      const i = loopNum % dataText.length;
      const fullText = dataText[i];
  
      this.setState({
        text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
        typingSpeed: isDeleting ? 50 : 150
      });
  
      if (!isDeleting && text === fullText) {
        
        setTimeout(() => {
          return this.setState({ isDeleting: true });
        }, 700);
        
      } else if (isDeleting && text === '') {
        
        this.setState({
          isDeleting: false,
          loopNum: loopNum + 1
        });
        
      }
  
      setTimeout(this.handleType, typingSpeed);
    };
  
    render() {    
      return (
          <div>
        <h2>{ this.props.heading }&nbsp;
        
          
        </h2>
        <h2>
        <span style={{color: "transparent"}}>.</span>
        <span style={{color: "red"}}>{ this.state.text }</span>
          <span id="cursor"/>
        </h2>
        </div>
      );
      
    }
  }
export default Typewriter1;
