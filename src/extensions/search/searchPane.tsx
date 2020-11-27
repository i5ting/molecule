import * as React from 'react';
import Toolbar from 'mo/components/toolbar';
import { prefixClaName } from 'mo/common/className';
import { Header, Content } from 'mo/workbench/sidebar';
import { activityBarService, editorService } from 'mo';
import { Button } from 'mo/components/button';

interface ISearchPaneToolBar {}

const initialState = {
    input: '',
    toolbar: [
        {
            id: 'Refresh',
            title: 'Refresh',
            disabled: true,
            iconName: 'codicon-refresh',
        },
        {
            id: 'Clear',
            disabled: true,
            title: 'Clear all',
            iconName: 'codicon-clear-all',
        },
        {
            id: 'Collapse',
            title: 'Collapse all',
            disabled: true,
            iconName: 'codicon-collapse-all',
        },
    ],
};

type State = typeof initialState;

export default class SearchPane extends React.Component<
    ISearchPaneToolBar,
    State
> {
    state: State;

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    onClick = (e, item) => {
        console.log('onClick:', e, item);
    };

    onInput = (e) => {
        const nextToolBar = [...this.state.toolbar];

        const value = e.target.value;
        if (!value) {
            nextToolBar.forEach((item) => {
                item.disabled = true;
            });
        } else {
            nextToolBar.forEach((item) => {
                item.disabled = false;
            });
        }
        this.setState({
            input: value,
            toolbar: nextToolBar,
        });
    };

    render() {
        const { toolbar } = this.state;

        const addABar = function () {
            const id = Math.random() * 10 + 1;
            activityBarService.push({
                id: id + '',
                name: 'folder' + id,
                iconName: 'codicon-edit',
            });
        };

        const newEditor = function () {
            const id = Math.random() * 10 + 1;
            const tabData = {
                activeTab: 0,
                id: id,
                name: `editor.js`,
                modified: true,
                value: 'hello javascript',
            };
            console.log('open editor:', tabData);
            editorService.open(tabData, 1);
        };

        const openCommand = function () {
            // MonacoEditor.editor.getModel().
        };
        return (
            <div className={prefixClaName('search-pane', 'sidebar')}>
                <Header
                    title={'Search'}
                    toolbar={<Toolbar data={toolbar} onClick={this.onClick} />}
                />
                <Content>
                    <h1>Search Pane</h1>
                    <p>{this.state.input}</p>
                    <input onInput={this.onInput} />
                    <hr></hr>
                    <div>
                        <Button onClick={addABar}>Add Bar</Button>
                        <Button onClick={newEditor}>New Editor</Button>
                        <Button onClick={openCommand}>Command Palette</Button>
                    </div>
                </Content>
            </div>
        );
    }
}
