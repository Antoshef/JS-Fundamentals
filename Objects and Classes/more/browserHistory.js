function browserHistory(input,todo) {
    let tabs = Object.values(input['Open Tabs']);
    
    console.log(input['Browser Name']);

    let actions = {
        Open : (app) => {
            input['Open Tabs'].push(app);
            input['Browser Logs'].push('Open ' + app);
        },
        Close : (app, tabs) => {
            let remove = null;
            for (let i = 0; i < tabs.length; i++) {
                if (app === tabs[i]) {
                    remove = tabs.splice(i,1);
                    break;
                }
            }
            if (remove) {
                input['Open Tabs'] = tabs;
                input['Recently Closed'].push(app);
                input['Browser Logs'].push('Close ' + app);
            }
        },
        Clear : () => {
            input['Open Tabs'] = [];
            input['Recently Closed'] = [];
            input['Browser Logs'] = [];
        }
    }

    for (let line of todo) {
        line = line.split(' ');

        let command = line.shift();
        let app = line.join(' ');
        let action = actions[command];
        action(app, tabs);
    }
    tabs = Object.values(input['Open Tabs']);
    let closed = Object.values(input['Recently Closed']);;
    let logs = Object.values(input['Browser Logs']);;
    console.log('Open Tabs: ' + tabs.join(', '));
    console.log('Recently Closed: ' + closed.join(', '));
    console.log('Browser Logs: ' + logs.join(', '));
}
browserHistory(
    {"Browser Name":"Mozilla Firefox",
    "Open Tabs":["YouTube"],
    "Recently Closed":["Gmail", "Dropbox"],
    "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
    ["Open Wikipedia", "Clear History and Cache", "Open Twitter"]
)