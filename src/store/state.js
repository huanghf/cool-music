/**
 * 设置state为数据源
 */
import { playMode } from 'common/js/config';

const state = {
  singer: {},
  playState: false, // 播放状态（暂停/播放）
  fullScreen: true, // 展示状态（全屏/迷你）
  playList: [], // 播放列表
  sequenceList: [], // 顺序列表
  playMode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放索引
};

export default state;
