import { Component } from "react"

const styles = {
    bubbleAlter: {
        backgroundColor: '#E9725A',
        borderRadius: '15px',
        color: '#fff',
        padding: '2px 10px',
        fontSize: '0.9 rem',
        width: '20px',  
    }
}
class BubbleAlert extends Component {
    getNumber(n) {
        if (!n) { return ''}
        return n > 9 ? '9+' : n
    }
    render() {
        const { value } = this.props
        return (
            <span style={styles.bubbleAlter}>
                {this.getNumber(value)}   
            </span>
        )
    }
}

export default BubbleAlert