import React from 'react-native';
import LocalizedStrings from 'react-native-localization';
import styles from '../styles';

let {
  NetInfo,
  Text
} = React;

// Localization of status messages
// @see https://github.com/stefalda/ReactNativeLocalization/wiki
let localizedStatus = new LocalizedStrings({
  en: {
    playing: "Now playing commercial-free!",
    paused: "Tap above to continue listening.",
    stopped: "Tap above to tune in.",
    buffering: "Buffering... Hang tight.",
    error: "Long-press above to restart stream.",
    disconnected: "Connect to the Internet to listen."
  },
  es: {
    playing: "Reproduciendo sin comerciales",
    paused: "Clickea la Imagen para escuchar",
    stopped: "Clickea la Imagen para sintonizar",
    buffering: "Cargando... Espere.",
    error: "Mantener la imagen presionada para reiniciar conexión",
    disconnected: "Conectate a Internet para escuchar"
  },
  de: {
    playing: "Jetzt spielt lizenzfreie Musik!",
    paused: "Tippe oben um weiter zu hören.",
    stopped: "Tippe oben um rein zu hören.",
    buffering: "Lädt... Bitte warten.",
    error: "Tippe oben lange um neu zu starten.",
    disconnected: "Verbinde dich mit dem Internet um zu hören."
  },
  ko: {
    playing: "본 동영상은 광고 없이 재생됩니다",
    paused: "계속 들으시려면 윗부분을 터치해주세요",
    stopped: "청취하시려면 윗부분을 눌러주세요",
    buffering: "버퍼링 중, 잠시만 기다려주세요",
    error: "다시 시작하시려면 위쪽을 길게 눌러주세요",
    disconnected: "인터넷을 연결하셔야 들을 수 있습니다."
  },
  "zh-Hans": {
    playing: "现正播放无广告时段！",
    paused: "按上面来继续收听。",
    stopped: "按上面来切换电台。",
    buffering: "正在缓冲...请稍候。",
    error: "长按上面来重新开始播放。",
    disconnected: "收听电台需要连接到因特网。"
  }
});

export default React.createClass({
  getInitialState() {
    return { isConnected: null };
  },
  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      'change',
      this._onConnectivityChange
    );
    NetInfo.isConnected.fetch().done((isConnected) => {
      this.setState({ isConnected });
    });
  },
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      'change',
      this._onConnectivityChange
    );
  },
  _onConnectivityChange(isConnected) {
    this.setState({ isConnected });
  },
  render() {
    let message;
    if (this.state.isConnected) {
      switch (this.props.status) {
        case 'PLAYING':
          message = localizedStatus.playing;
          break;
        case 'PAUSED':
          message = localizedStatus.paused;
          break;
        case 'STOPPED':
          message = localizedStatus.stopped;
          break;
        case 'BUFFERING':
          message = localizedStatus.buffering;
          break;
        case 'ERROR':
        default:
          message = localizedStatus.error;
          break;
      }
    } else {
      message = localizedStatus.disconnected;
    }
    return (
      <Text style={[styles.appMessage, styles.appSubMessage, styles.connectionMessage]}>{message}</Text>
    );
  }
});
