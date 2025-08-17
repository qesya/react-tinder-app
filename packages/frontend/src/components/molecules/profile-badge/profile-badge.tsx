import { PhotoCamera, LocationOn } from '@mui/icons-material';
import { Text } from '@app/components/atoms';
import type { ProfileBadgeProps } from './profile-badge.types';
import {
  ProfileCard,
  BackgroundImage,
  PhotoCounter,
  PhotoCounterContent,
  ContentOverlay,
  ProfileInfo,
  LocationContainer,
  BioContainer,
  InterestsContainer,
  InterestsList,
  InterestTag,
  InterestCountTag
} from './profile-badge.styles';
import { useTheme } from '@mui/material';

export const ProfileBadge: React.FC<ProfileBadgeProps> = ({ profile }) => {
  const theme = useTheme();
  
  return (
    <ProfileCard>
      <BackgroundImage imageUrl={profile.photos?.[0]} />
      
      {profile.photos && profile.photos.length > 1 && (
        <PhotoCounter>
          <PhotoCounterContent>
            <PhotoCamera 
              sx={{ 
                fontSize: '0.8rem', 
                color: theme.customColors.text.onDark.primary 
              }} 
            />
            <Text 
              variant="caption" 
              sx={{ 
                color: theme.customColors.text.onDark.primary,
                fontSize: '0.75rem',
                fontWeight: 500,
                textShadow: `0 1px 2px ${theme.customColors.glass.dark.medium}`
              }}
            >
              {profile.photos.length}
            </Text>
          </PhotoCounterContent>
        </PhotoCounter>
      )}
      
      <ContentOverlay>
        <ProfileInfo>
          <Text 
            variant="h2" 
            sx={{ 
              fontWeight: 700,
              fontSize: '1.75rem',
              color: theme.customColors.text.onDark.primary,
              mb: 0.5,
              textShadow: `0 2px 8px ${theme.customColors.glass.dark.medium}`
            }}
          >
            {profile.name}
          </Text>
          <Text 
            variant="body1" 
            sx={{ 
              color: theme.customColors.text.onDark.secondary,
              fontSize: '1.1rem',
              fontWeight: 500,
              textShadow: `0 1px 4px ${theme.customColors.glass.dark.light}`
            }}
          >
            {profile.age} years old
          </Text>
          
          {profile.location?.city && (
            <LocationContainer>
              <LocationOn 
                sx={{ 
                  fontSize: '0.9rem', 
                  color: theme.customColors.text.onDark.tertiary 
                }} 
              />
              <Text 
                variant="body2" 
                sx={{ 
                  color: theme.customColors.text.onDark.tertiary,
                  fontSize: '0.9rem',
                  textShadow: `0 1px 4px ${theme.customColors.glass.dark.light}`
                }}
              >
                {profile.location.city}
              </Text>
            </LocationContainer>
          )}
        </ProfileInfo>
        
        {profile.bio && (
          <BioContainer>
            <Text 
              variant="body2" 
              sx={{ 
                color: theme.customColors.text.onDark.secondary,
                fontSize: '0.9rem',
                fontStyle: 'italic',
                textShadow: `0 1px 4px ${theme.customColors.glass.dark.light}`,
                lineHeight: 1.4,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              "{profile.bio}"
            </Text>
          </BioContainer>
        )}
        
        {profile.interests && profile.interests.length > 0 && (
          <InterestsContainer>
            <InterestsList>
              {profile.interests.slice(0, 4).map((interest, index) => (
                <InterestTag key={index}>
                  <Text  
                    sx={{ 
                      color: 'white',
                      fontSize: '0.5rem',
                      fontWeight: 500,
                      textShadow: `0 1px 2px ${theme.customColors.glass.overlay.medium}`
                    }}
                  >
                    {interest}
                  </Text>
                </InterestTag>
              ))}
              {profile.interests.length > 4 && (
                <InterestCountTag>
                  <Text 
                    variant="caption" 
                    sx={{ 
                      color: theme.customColors.text.primary,
                      fontSize: '0.75rem',
                      fontWeight: 500,
                      textShadow: `0 1px 2px ${theme.customColors.glass.overlay.medium}`
                    }}
                  >
                    +{profile.interests.length - 4}
                  </Text>
                </InterestCountTag>
              )}
            </InterestsList>
          </InterestsContainer>
        )}
      </ContentOverlay>
    </ProfileCard>
  );
};
