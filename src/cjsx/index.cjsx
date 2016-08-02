require('../scss/index.scss')

# 単純に`Hello XX`と出力するだけのコンポーネント
Hello = React.createClass(
  propTypes:
    name: React.PropTypes.string.isRequired

  render: ->
    <div>Hello {@props.name}</div>
)

$(
  () ->
    # Helloコンポーネントを#appにマウント
    ReactDOM.render(
      <Hello name="React.js!!?" />,
      document.getElementById("container")
    )
)
