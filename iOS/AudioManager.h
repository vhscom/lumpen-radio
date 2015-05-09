//
//  AudioManager.h
//  ReactNativeEs6Reflux
//
//  Created by VHS on 5/9/15.
//  Copyright (c) 2015 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "RCTBridgeModule.h"
#import "STKAudioPlayer.h"

static NSString *const audioStream = @"https://50.7.99.155:7416/;stream/1";

@interface AudioManager : NSObject <RCTBridgeModule, STKAudioPlayerDelegate>

@end
