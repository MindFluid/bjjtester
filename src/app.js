      var beltType = {
        defaultItems: ['foo', 'bar', 'baz', 'buz'],
        blue: ['mercury', 'venus', 'terra', 'mars', 'jupiter'],
        purple: ['hermes', 'aphrodiete', 'gaea', 'ares', 'zeus']
      };

      var App = React.createClass({
        getInitialState: function() {
          return { 
            initalItems: beltType.defaultItems,
            checkboxItems: [],
            moveItems: [],
            showList: false
          }
        },

        handleListUpdate: function(listType) {
          this.setState({
            checkboxItems: beltType[listType],
            showList: true
          });
        },

        handelMoveListUpdate: function(item) {
          var tmp = [];
          tmp.push(item);
          this.setState({
            moveItems: this.state.moveItems.push(item).slice()
          });
        },

        render: function() {
          return (
            <section>
            <div>
              <BeltOptions updateListType={this.handleListUpdate} />
            </div>
            <div className={this.state.showList ? '' : 'hide' }>
              <CheckboxList items={this.state.checkboxItems} updateMoveList={this.handelMoveListUpdate} />
            </div>
            <div>
              <MoveList items={this.moveItems}/>
            </div>
            </section>
          );
        }
      });


      var BeltOptions = React.createClass({
        changeListType: function() {
          var value = event.target.value;
          this.props.updateListType(value);
        },
        getInitialState: function() {
          return {
            types: ['blue', 'purple']
          }
        },
        render: function() {
          return (
          <ul onChange={this.changeListType} >
            {
              this.state.types.map(function(type) {
                return <li key={type}>
                  <input type='radio' value={type} id={type} name="BeltOptions" />
                    <label htmlFor={type}>{type}</label>
                  </li>
                })
            }
          </ul>
          )
        }
      });

      var CheckboxList = React.createClass({
      incrementCount: function() {
        this.setProps({count: this.props.count + 1 });
      },
        toggleMoveItem: function() {
          var value = event.target.value;
          this.props.updateMoveList(value);
        },
        render: function() {
          return (
            <ul onChange={this.toggleMoveItem}>
              {
                this.props.items.map(function(item, count) {
                  return <li key={item}>
                    <input type='checkbox' value={count++} id={count} />
                      <label htmlFor={count}>{count} {item}</label>
                  </li>
                })
              }
            </ul>
          )
        }
      });

      var MoveList = React.createClass({
        getInitialState: function() {
            return {
              items: []
            }
        },
        // updateList: function() {
        //   this.setState({
        //     items: 
        //   })
        // },
        render: function() {
          return (
            <ul>
            {
              this.state.items.map(function(moveItem, count){
                return <li key={moveItem}>
                  {count} {item}
                  </li>
              })
            }
            </ul>
          )
        }
      });

    React.render(<App/>, document.getElementById('main'));