import { useState, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import COURSE_DATA from '../data/courseData';
import { useStorage } from '../hooks/useStorage';
import { BookOpen, GraduationCap, Blocks } from 'lucide-react';

type ZoneType = 'picturebook' | 'science' | 'hands-on';

interface VideoItem {
  lessonId: number;
  courseTitle: string;
  videoUrl: string;
  title: string;
  coverImage: string;
  zone: ZoneType;
}

// 根据课程数据生成视频列表
function generateVideoList(): VideoItem[] {
  const videos: VideoItem[] = [];

  COURSE_DATA.forEach((course: any) => {
    const numStr = String(course.id).padStart(2, '0');
    const coverImage = course.coverImage?.replace(/^\.\.\//, './assets/') || '';

    // 绘本视频 - 每个课程都有
    videos.push({
      lessonId: course.id,
      courseTitle: course.title || `第${course.id}课`,
      videoUrl: `./assets/videos/videos/${numStr}/video.mp4`,
      title: `${course.title || '绘本动画'} - 第${course.id}课`,
      coverImage,
      zone: 'picturebook',
    });

    // 科普视频 - 使用Bilibili占位链接（实际链接需要从课程数据获取）
    if (course.id <= 8) {
      videos.push({
        lessonId: course.id,
        courseTitle: course.title || `第${course.id}课`,
        videoUrl: 'bilibili-placeholder',
        title: `科普知识 - 第${course.id}课`,
        coverImage,
        zone: 'science',
      });
    }

    // 动手教学视频 - 每4课有一个
    if (course.id % 4 === 0) {
      videos.push({
        lessonId: course.id,
        courseTitle: course.title || `第${course.id}课`,
        videoUrl: `./assets/videos/videos/${numStr}/video.mp4`,
        title: `动手教学 - 第${course.id}课`,
        coverImage,
        zone: 'hands-on',
      });
    }
  });

  return videos;
}

export default function CinemaPage() {
  const [activeZone, setActiveZone] = useState<ZoneType>('picturebook');
  const [playingVideo, setPlayingVideo] = useState<VideoItem | null>(null);
  const { storage, updateVideoProgress } = useStorage();
  const videoRef = useRef<HTMLVideoElement>(null);

  const allVideos = generateVideoList();

  const zones = [
    { key: 'picturebook' as ZoneType, label: '绘本动画区', Icon: BookOpen, color: 'var(--kid-purple-400)' },
    { key: 'science' as ZoneType, label: '科普知识区', Icon: GraduationCap, color: 'var(--kid-blue-500)' },
    { key: 'hands-on' as ZoneType, label: '动手教学区', Icon: Blocks, color: 'var(--kid-orange-400)' },
  ];

  const filteredVideos = allVideos.filter(v => v.zone === activeZone);

  const handleVideoClick = (video: VideoItem) => {
    // 跳过占位的Bilibili链接
    if (video.videoUrl === 'bilibili-placeholder') {
      alert('科普视频功能正在开发中，敬请期待！');
      return;
    }
    setPlayingVideo(video);
  };

  const handleCloseVideo = () => {
    setPlayingVideo(null);
  };

  const handleVideoTimeUpdate = useCallback(() => {
    if (playingVideo && videoRef.current && !videoRef.current.src.includes('bilibili')) {
      const currentTime = Math.floor(videoRef.current.currentTime);
      updateVideoProgress(playingVideo.lessonId, playingVideo.videoUrl, currentTime);
    }
  }, [playingVideo, updateVideoProgress]);

  const getVideoProgress = (lessonId: number, videoUrl: string): number => {
    const record = storage.lessons[lessonId];
    if (record && record.videoProgress[videoUrl]) {
      return record.videoProgress[videoUrl];
    }
    return 0;
  };

  const getZoneVideos = (zone: ZoneType) => allVideos.filter(v => v.zone === zone);

  return (
    <div className="kid-float-in" style={{ width: 1920, minHeight: 1000, padding: '40px 48px', boxSizing: 'border-box' }}>
      {/* 顶部标题区 */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ fontSize: 48 }}>🎬</div>
          <div>
            <h1 style={{ fontSize: 36, fontWeight: 900, color: 'var(--kid-gray-800)', margin: 0 }}>精彩影院</h1>
            <p style={{ fontSize: 16, color: 'var(--kid-gray-400)', margin: '4px 0 0 0' }}>精选32节课程视频，随时观看学习</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <img src="./assets/characters/characters/tuantuan.png" alt="团团" style={{ width: 60, height: 75 }} />
          <img src="./assets/characters/characters/diandian.png" alt="点点" style={{ width: 55, height: 65 }} />
        </div>
      </div>

      {/* 视频区域Tab */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
        {zones.map(zone => (
          <button
            key={zone.key}
            onClick={() => setActiveZone(zone.key)}
            style={{
              padding: '14px 32px',
              borderRadius: 20,
              border: 'none',
              fontSize: 18,
              fontWeight: 700,
              cursor: 'pointer',
              background: activeZone === zone.key ? zone.color : 'white',
              color: activeZone === zone.key ? 'white' : 'var(--kid-gray-500)',
              boxShadow: activeZone === zone.key
                ? '0 6px 20px rgba(0,0,0,0.15)'
                : '0 2px 8px rgba(0,0,0,0.08)',
              transition: 'all 0.2s ease',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <zone.Icon size={24} strokeWidth={2} />
            {zone.label}
            <span style={{
              background: activeZone === zone.key ? 'rgba(255,255,255,0.3)' : 'var(--kid-gray-100)',
              padding: '2px 10px',
              borderRadius: 12,
              fontSize: 14,
            }}>
              {getZoneVideos(zone.key).length}
            </span>
          </button>
        ))}
      </div>

      {/* 视频网格 */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}>
        {filteredVideos.map((video, idx) => {
          const progress = getVideoProgress(video.lessonId, video.videoUrl);
          const isPlaceholder = video.videoUrl === 'bilibili-placeholder';
          const isMP4 = video.videoUrl.endsWith('.mp4');

          return (
            <div
              key={`${video.lessonId}-${video.zone}-${idx}`}
              onClick={() => !isPlaceholder && handleVideoClick(video)}
              style={{
                background: 'white',
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                cursor: isPlaceholder ? 'default' : 'pointer',
                transition: 'all 0.2s ease',
                border: '2px solid var(--kid-gray-100)',
              }}
            >
              {/* 封面/缩略图 */}
              <div style={{
                position: 'relative',
                aspectRatio: '16/9',
                background: `linear-gradient(135deg, var(--kid-purple-100), var(--kid-blue-100))`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <img
                  src={video.coverImage}
                  alt={video.courseTitle}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.8,
                  }}
                />
                {/* 播放按钮 */}
                {isMP4 && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.3)',
                  }}>
                    <div style={{
                      width: 64,
                      height: 64,
                      borderRadius: '50%',
                      background: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 28,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    }}>
                      ▶
                    </div>
                  </div>
                )}
                {/* Bilibili标记 */}
                {isPlaceholder && (
                  <div style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    background: '#00A1D6',
                    color: 'white',
                    padding: '4px 10px',
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 700,
                  }}>
                    B站
                  </div>
                )}
                {/* 课程号角标 */}
                <div style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  background: 'rgba(0,0,0,0.6)',
                  color: 'white',
                  padding: '4px 10px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                }}>
                  第{video.lessonId}课
                </div>
              </div>

              {/* 视频信息 */}
              <div style={{ padding: '14px 16px' }}>
                <h3 style={{
                  fontSize: 15,
                  fontWeight: 700,
                  color: 'var(--kid-gray-700)',
                  margin: '0 0 8px 0',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {video.title}
                </h3>
                <p style={{
                  fontSize: 13,
                  color: 'var(--kid-gray-400)',
                  margin: 0,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}>
                  {video.courseTitle}
                </p>

                {/* 进度条 */}
                {isMP4 && progress > 0 && (
                  <div style={{ marginTop: 10 }}>
                    <div style={{
                      height: 4,
                      background: 'var(--kid-gray-100)',
                      borderRadius: 2,
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${Math.min((progress / 600) * 100, 100)}%`,
                        background: 'var(--kid-green-400)',
                        borderRadius: 2,
                      }} />
                    </div>
                    <p style={{
                      fontSize: 11,
                      color: 'var(--kid-gray-400)',
                      margin: '4px 0 0 0',
                    }}>
                      已观看 {Math.floor(progress / 60)}分{progress % 60}秒
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* 视频播放器模态框 */}
      {playingVideo && createPortal(
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.85)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={handleCloseVideo}
        >
          <div
            style={{
              width: '90%',
              maxWidth: 1200,
              background: 'white',
              borderRadius: 24,
              overflow: 'hidden',
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* 播放器头部 */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '16px 24px',
              background: 'var(--kid-purple-500)',
              color: 'white',
            }}>
              <div>
                <h2 style={{ fontSize: 20, fontWeight: 800, margin: 0 }}>{playingVideo.title}</h2>
                <p style={{ fontSize: 14, margin: '4px 0 0 0', opacity: 0.8 }}>
                  第{playingVideo.lessonId}课 · {playingVideo.courseTitle}
                </p>
              </div>
              <button
                onClick={handleCloseVideo}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  border: 'none',
                  borderRadius: 12,
                  padding: '10px 20px',
                  color: 'white',
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                ✕ 关闭
              </button>
            </div>

            {/* 视频播放器 */}
            <div style={{ background: '#000', aspectRatio: '16/9' }}>
              <video
                ref={videoRef}
                src={playingVideo.videoUrl}
                controls
                autoPlay
                style={{ width: '100%', height: '100%' }}
                onTimeUpdate={handleVideoTimeUpdate}
                onPause={() => {
                  if (videoRef.current) {
                    updateVideoProgress(
                      playingVideo.lessonId,
                      playingVideo.videoUrl,
                      Math.floor(videoRef.current.currentTime)
                    );
                  }
                }}
              />
            </div>

            {/* 底部信息 */}
            <div style={{
              padding: '16px 24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--kid-gray-50)',
            }}>
              <div style={{ display: 'flex', gap: 16 }}>
                <img src="./assets/characters/characters/tuantuan.png" alt="团团" style={{ width: 40, height: 50 }} />
                <img src="./assets/characters/characters/diandian.png" alt="点点" style={{ width: 36, height: 44 }} />
              </div>
              <p style={{ color: 'var(--kid-gray-500)', fontSize: 14, margin: 0 }}>
                团团和点点陪你一起看电影学知识 🎬
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}
