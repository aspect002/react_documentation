import React, { Component } from "react";
import { Container, Button } from "./styled";

class DataFetcher extends Component {
    state = {
        loading: false,
        error: null,
        data: null,
    };

    async fetchData() {
        this.setState({ loading: true, error: null });
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await response.json();
            this.setState({ data: result });
            alert(JSON.stringify(result, null, 2));
        } catch (error) {
            this.setState({ error: error.message });
        } finally {
            this.setState({ loading: false });
        }
    }

    componentDidMount() {
        this.fetchData(); 
    }

    render() {
        const { loading, error } = this.state;

        return (
            <Container>
                <Button onClick={() => this.fetchData()} disabled={loading}>
                    {loading ? "Загрузка..." : "Отправить запрос"}
                </Button>
                {error && <div style={{ color: 'red' }}>Ошибка: {error}</div>}
            </Container>
        );
    }
}

export default DataFetcher;
