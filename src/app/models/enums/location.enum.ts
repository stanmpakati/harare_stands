export enum Community {
  HighDensity = 'high density',
  MidDensity = 'medium density',
  LowDensity = 'low density',
  none = 'none',
}

export const CommunityToLabelMapping: Record<Community, string> = {
  [Community.none]: 'No community',
  [Community.HighDensity]: 'High Density',
  [Community.MidDensity]: 'Medium Density',
  [Community.LowDensity]: 'Low Density',
};
