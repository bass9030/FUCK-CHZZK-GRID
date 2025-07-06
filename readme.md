# FUCK-CHZZK-GRID

![logo](https://github.com/bass9030/FUCK-CHZZK-GRID/blob/master/icon.png?raw=true)

Firefox에서 치지직의 그리드 프로그램 요구를 우회합니다.<br/>
[설치하러가기](https://addons.mozilla.org/ko/firefox/addon/fuck-chzzk-grid/)

## 사용방법

1. 확장프로그램 설치
2. 화질설정에서 1080p with FUCK GRID™ 설정

![menu](https://github.com/bass9030/FUCK-CHZZK-GRID/blob/master/images/resolution-select.png?raw=true)

## FAQ

-   "https://chzzk.naver.com 사이트가 NAVER Live Streaming 애프리케이션으로 naverliveconnector 링크를 열도록 허용하시겠습니까?" 창이 계속해서 표시됩니다.

네이버 라이브 스트리밍 커넥터(NLiveConnector)를 제거한 뒤 사용해주세요. 만약 네이버 라이브 스트리밍 커넥터를 지워도 해당 창이 계속하여 발생한다면 [fix-live-connector.reg](https://github.com/bass9030/FUCK-CHZZK-GRID/blob/master/reg/fix-live-connector.reg) 파일을 다운로드하여 실행해주세요.

-   화질설정에 1080p with FUCK GRID™이 표시되지 않습니다

확장프로그램이 간혈적으로 화질설정 텍스트를 변경하지 못하는 경우가 있습니다. 이는 단순히 텍스트만을 변경하는것이며 그리드 우회와는 전혀 상관 없으므로 이런 경우 화질을 480p로 변경하시면 라이브가 1080p로 재생됩니다.

-   화질설정을 했는데 1080p 작동여부가 궁금합니다

F12 -> 네트워크 탭으로 가서 `chunklist_1080p.m3u8` 혹은 `/1080p/~~~chunklist.m3u8`로 이루어진 요청이 계속 표시되는지 확인해보세요.<br/>
만약 `chunklist_1080p.m3u8` 혹은 `/1080p/~~~chunklist.m3u8`로 표시되지 않는다면 이슈를 남겨주세요. 최대한 빠르게 해결해드리겠습니다.

## Special Thanks

-   PASSWATCH ([치지직 올인원 스크립트](https://greasyfork.org/ko/scripts/534791-chzzk-%EC%98%AC%EC%9D%B8%EC%9B%90-%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-auto-quality-ad-popup-removal-unmute) 제작)
-   루션 (화질고정 스크립트 수정본 제공)
