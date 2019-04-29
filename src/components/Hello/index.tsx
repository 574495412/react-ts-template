import * as React from 'react';
import { Button } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { login } from '../../api/user'
import { setUser } from '../../store/actions/'
export interface Props {
    number: number;
    history: any;
    match: any;
    name?: string;
    userInfo: any;
    Add?: () => void;
    Reduce?: () => void;
    setUser: typeof setUser;
}

export interface State {
    num1: number
}

class Hello extends React.Component<Props, State>{
    constructor(props: Props) {
        super(props);
        this.state = {
            num1: 10
        }
    }
    public render() {
        const { number, name, Add, Reduce, setUser, history, match } = this.props;
        return (
            <div>
                Hello {name + this.getExclamationMarks(number)}
                <Button onClick={Add}>+</Button>
                <Button onClick={Reduce}>-</Button>
                <button onClick={this.jsGo.bind(this)}>js跳转</button >
                <Link to={
                    {
                        pathname: '/',
                        state: { name: 1,type:1 }
                    }
                } >2</Link>
                <button onClick={this.axios.bind(this)}>ajax</button>
            </div>
        )
    }

    jsGo = () => {
        this.props.history.push({
            pathname: '/',
            state: { name: 1,type:1 }
        })
    }

    axios = async() => {
        let res: any = await login({ username: 'cl', password: 'admin' });
        if (res.status == 200) {
            this.props.setUser(res.data)
        }
    }

    getExclamationMarks = (num: number)=> {
        return Array(num + 1).join('!');
    }
}
export default withRouter(Hello as any)