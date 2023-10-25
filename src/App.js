import Accordion from './components/Accordion';

function App() {
    const item = [
        {
            id: 'l2kj5',
            label: 'Can I use React on a project?',
            content:'You can use React on any project you want.'
        },
        {
            id: 'lab125',
            label: 'Can I use JavaScript on a project?',
            content:'You can use React on any project you want.'
        },
        {
            id: 'cd321',
            label: 'Can I use CSS on a project?',
            content:'You can use React on any project you want.'
        }
    ];

    return <Accordion items={props} />;
}

export default App;